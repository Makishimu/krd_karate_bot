import {
    BOT_COMMANDS_TEXT,
    OTHER_TEXT_ANSWER,
    MASTERS_ARRAY,
    ALL_GYMS_LIST
} from '../config/consts.js';
import { Markup } from 'telegraf';
import { fmt, bold, italic } from "telegraf/format";

const start = async ctx => {
    try {
        console.log('User started - ', ctx.message.from);
        // Отправка админу сообщение о начал работы с ботом
        await ctx.telegram.sendMessage(
            process?.env?.ADMIN_ID || 167986013,
            `Был старт от полозьвателя:
            id - ${ctx.message.from.id}
            имя - ${ctx.message.from.first_name || 'неизвестно'}
            фамилия - ${ctx.message.from.last_name || 'неизвестна'}
            ник -  ${ctx.message.from.username || 'неизвестен'}`
        );
        await ctx.replyWithHTML(
            `Добрый день, рады Вас видеть ${ctx.message?.from?.first_name || 'в нашем боте'}!\n\n` +
            'Это информационный бот, спортивной секции киокушинкай карате в городе Краснодаре.\n\n' +
            '<b>Наш сенсей</b> - ' +
            'Казарян Самвел Александрович, чёрный пояс, 4й дан. Он воспитал огромное количество чемпионов' +
            ' России, Европы, Мира. Множество молодых мастеров, его воспитанников, так же тренируют в этой секции по всему городу.\n\n' +
            'Здесь можно узнать всю интересующую Вас информацию.\n\n' +
            '<b>Для работы с ботом, воспользутесь командами из меню:</b>' +
            BOT_COMMANDS_TEXT
        );

    } catch (error) {
        await console.log('`При выполнении операции /start возникла ошибка -', error);
        await ctx.reply(`При выполнении операции /start возникла ошибка - ${error.message}`)
    }

};
const help = async ctx => {
    try {
        await ctx.reply(BOT_COMMANDS_TEXT);
    } catch (error) {
        console.log('ERROR while help - ', error.message);
    }

};

const gymsList =  async ctx => {
    try {
        await ctx.replyWithHTML(
            '<b>Выберите тренера, чьи контакты Вы хотите посмотреть:</b>',
            Markup.inlineKeyboard(ALL_GYMS_LIST.map(gym => {
                return [Markup.button.callback(`${gym.title}`, gym.id)];
            }))
        );
    } catch (error) {
        console.log('ERROR inside gymsList - ', error.message);
    }

}

const createSendMasterFunction = async (bot, master) => {
    await bot.action(master.innerName,
        async ctx => {
            try {
                await ctx.answerCbQuery();
                await ctx.replyWithPhoto(
                    master.picture,
                    { caption: fmt
                            `${bold`${master.name}.`}\n\nТелефон: ${master.phone}\n\n${italic('Ведёт занятия в залах:')}\n\n${
                                master.gymsList.map(gym => { return `${gym.title} - ${gym.address}\n`}).join('')
                            }\n`
                    }
                );
            } catch (error) {
                console.error(`Error while MASTER ${master.innerName} processing - `, error.message);
            }
        });
};

const createSendGymFunction = async (bot, gym) => {
    let trainersNameArr = [];
    for (let key in gym.schedule) {
        trainersNameArr.push(MASTERS_ARRAY.find(trainer => trainer.innerName === key));
    }

    await bot.action(gym.id,
        async ctx => {
            try {
                await ctx.answerCbQuery();
                await ctx.replyWithHTML(
                    `<b>${gym.title}</b> - ` +
                    `<i>${gym.address}</i>\n\n` +
                    `<b>В зале ведут занятия тренеры:</b>\n\n` +
                    `${trainersNameArr.map(
                        trainer =>
                            `<b>${trainer.name}</b>\n${gym.schedule[trainer.innerName].map(
                                listItem =>
                                    `${listItem}\n`
                            ).join('')}\n\n`).join('')}` +
                    `Вы можете открыть местоположение на карте:\n` +
                    `${gym.link}\n\n`
                );
            } catch (error) {
                console.error(`Error while GYM ${gym.id} processing - `, error.message);
            }
        });
};

const send_contacts_command = async (ctx) => {
    try {
            await ctx.replyWithHTML(
                '<b>Выберите тренера, чьи контакты Вы хотите посмотреть:</b>',
                Markup.inlineKeyboard(MASTERS_ARRAY.map(master => {
                    return [Markup.button.callback(`${master.name}`, master.innerName)];
                }))
            );
    } catch (error) {
        console.error('Error while send_contacts_command processing - ', error.message);
    }
};
const add_contacts_command = async ctx => {
    try {
        if (ctx && !ctx.message) {
            await ctx.answerCbQuery();
        }
        MASTERS_ARRAY.map(
            async master => {
                await ctx.replyWithContact(`${master.phone}`, `${master.phoneName}`);
            }
        );

    } catch (error) {
        await ctx.reply(
            'Вы слишком часто запрашивали контакты наших мастеров и телеграм перестал их отправлять' +
            ', пожалуйста, добавьте уже контакты в ручном режиме :)'
        );
        await send_contacts_command(ctx, true);
        console.error('Error while add_contacts_command processing - ', error.message);
    }
};

const not_understand_command = async ctx => {
    try {
        await ctx.replyWithHTML(OTHER_TEXT_ANSWER);
    } catch (error) {
        console.error('Hearing Error - ', error.message);
    }
};

export {
    start,
    help,
    gymsList,
    send_contacts_command,
    add_contacts_command,
    not_understand_command,
    createSendMasterFunction,
    createSendGymFunction
}