import {
    BOT_COMMANDS_TEXT,
    DIFFERENT_ACTIONS_BUTTONS,
    OTHER_TEXT_ANSWER,
    MASTERS_ARRAY,
    ALL_GYMS_LIST
} from '../config/consts.js';
import { Markup } from 'telegraf';
import { fmt, link, bold } from "telegraf/format";

const start = async ctx => {
    try {
        console.log('User started - ', ctx.message.from);
        await ctx.telegram.sendMessage(
            167986013,
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
            ' Росии, Европы, Мира. А так же молодых мастеров которые так же тренируют в этой секции по всему городу.\n\n' +
            'Здесь можно узнать всю интересующую Вас информацию.\n\n' +
            '<b>Для работы с ботом, воспользутесь командами из меню:</b>' +
            BOT_COMMANDS_TEXT
            // '<b>Выберите подходящий вид услуг:</b>',
            // Markup.inlineKeyboard(PRICE_LIST.map(item => {
            //     return [Markup.button.callback(item.title, item.id)]
            // }))
        );

    } catch (error) {
        await console.log('`При выполнении операции /start возникла ошибка -', error);
        await ctx.reply(`При выполнении операции /start возникла ошибка - ${error.message}`)
    }

};
const help = async ctx => {
    await ctx.reply(BOT_COMMANDS_TEXT);
};

const gymsList =  async ctx => {
    try {
        await ALL_GYMS_LIST.forEach(
             (gym) => {
                ctx.replyWithHTML(
                    `<b>${gym.title}</b>\nрасположен по надресу:\n` +
                    `<i>${gym.address}</i>\n\n` +
                    `Вы можете открыть местоположение на карте:\n` +
                    `${gym.link}\n\n`
                );
            }
        );
        // await ctx.replyWithHTML(
        //     `${
        //         ALL_GYMS_LIST.map(
        //             gym => {
        //                 return (
        //                     `<b>${gym.title}</b>\nрасположен по надресу:\n` +
        //                     `<i>${gym.address}</i>\n\n` +
        //                     `Вы можете открыть местоположение на карте:\n` +
        //                     `${gym.link}\n\n`
        //                 );
        //             }
        //         ).join('')}`
        // );
    } catch (error) {
        console.log('ERROR inside gymsList - ', error.message);
    }

}

const createReplyFunction = (type) => {
    return async ctx => {
        try {
            await ctx.answerCbQuery();
            await ctx.replyWithPhoto(
                { source: FIRST_STEP_PICTURES_MAP[type]},
                { caption: fmt
                        `${bold`${PRICE_ANSWER_TITLE_LIST_MAP[type]}.`}
            \n${link(
                            '🔗📋Скачайте его, нажав на этот текст👈',
                            `${'https://google.com'}`
                        )}\n\nДля получения других ссылок, воспользуйтесь командой  /list
            `
                }
            );
        } catch (error) {
            console.error(`Error while ${type} processing - `, error.message);
        }
    }
};

// const appliances_repair_command = createReplyFunction('appliances_repair');
// const plumber_command = createReplyFunction('plumber');
// const finishing_works_command = createReplyFunction('finishing_works');
// const construction_command = createReplyFunction('construction');
const send_contacts_command = async (ctx, hideAddContacts) => {
    try {
        await ctx.replyWithHTML(
            `${
                MASTERS_ARRAY.map(
                    master => {
                        return (
                            `<b>${master.phoneName}</b>\n` + 
                            `<i>Телефон:</i> <a href="tel:${master.phone}">${master.phone}</a>\n\n` +
                            `<i>Ведёт занятия в залах:</i>\n${
                                master.gymsList.map(gym => { return `${gym.title} - ${gym.address}\n`}).join('')
                            }______________________\n\n`
                        )}
                ).join('')
            }`
        );
        if (!hideAddContacts) {
            await ctx.replyWithHTML('Добавьте наши контакты к себе в записную книгу:',
                Markup.inlineKeyboard(
                    [Markup.button.callback(
                        'Получить контакты',
                        'btn_get_contacts'
                    )])
            );
        }
        // await ctx.replyWithHTML('Вернуться к списку стоимости услуг:',
        //     Markup.inlineKeyboard([Markup.button.callback('Назад', 'btn_back')])
        // );
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
    not_understand_command
}