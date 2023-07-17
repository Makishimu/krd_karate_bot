import {
    BOT_COMMANDS_TEXT,
    OTHER_TEXT_ANSWER,
    TRAINERS_ARRAY,
    ALL_GYMS_LIST
} from '../config/consts.js';
import { Markup } from 'telegraf';

const start = async ctx => {
    try {
        // Отправка админу сообщение о начал работы с ботом
        await ctx.telegram.sendMessage(
            process?.env?.ADMIN_ID,
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
        await console.error('При выполнении операции /start возникла ошибка - ', error.message);
    }

};
const help = async ctx => {
    try {
        await ctx.reply(BOT_COMMANDS_TEXT);
    } catch (error) {
        console.error('ERROR while /help - ', error.message);
    }

};

const gymsList =  async ctx => {
    try {
        await ctx.replyWithHTML(
            '<b>Выберите зал, информацию о котором Вы хотите посмотреть:</b>',
            Markup.inlineKeyboard(ALL_GYMS_LIST.map(gym => {
                return [Markup.button.callback(`${gym.title}`, gym.id)];
            }))
        );
    } catch (error) {
        console.error('ERROR inside gymsList - ', error.message);
    }

}

const createSendTrainerFunction = async (bot, trainer) => {
    await bot.action(trainer.innerName,
        async ctx => {
            try {
                await ctx.answerCbQuery();
                if (trainer.picturesArr.length === 1) {
                    await ctx.replyWithPhoto(
                        trainer.picturesArr[0],
                        { caption:
                            `${trainer.name}\n\n` +
                            `${trainer.mainInfo}\n\n` +
                            `Телефон: ${trainer.phone}\n\n` +
                            'Ведёт занятия в залах:\n\n' +
                            `${trainer.gymsList.map(
                                gym => { return `${gym.title} - ${gym.address}\n`})
                                .join('')
                                }`
                        }
                    );
                } else {
                    await ctx.replyWithMediaGroup(trainer.picturesArr.map((picture, index) => {
                        if (index === trainer.picturesArr.length - 1) {
                            return {
                                type: 'photo',
                                media: picture,
                                caption:
                                    `${trainer.name}\n\n` +
                                    `${trainer.mainInfo}\n\n` +
                                    `Телефон: ${trainer.phone}\n\n` +
                                    'Ведёт занятия в залах:\n\n' +
                                    `${trainer.gymsList.map(
                                        gym => { return `${gym.title} - ${gym.address}\n`})
                                        .join('')
                                    }`
                            };
                        }
                        return {
                            type: 'photo',
                            media: picture,
                        };
                    }));
                }

                await ctx.replyWithHTML(
                    '<b>Узнать больше информации о зале и расписании:</b>',
                    Markup.inlineKeyboard(trainer.gymsList.map(gym => {
                        return [Markup.button.callback(`${gym.title}`, gym.id)];
                    }))
                );
                await ctx.replyWithContact(`${trainer.phone}`, `${trainer.phoneName}`);
            } catch (error) {
                console.error(`Error while TRAINER ${trainer.innerName} processing - `, error.message);
            }
        });
};

const createSendGymFunction = async (bot, gym) => {
    let trainersNameArr = [];
    for (let key in gym.schedule) {
        trainersNameArr.push(TRAINERS_ARRAY.find(trainer => trainer.innerName === key));
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
                Markup.inlineKeyboard(TRAINERS_ARRAY.map(master => {
                    return [Markup.button.callback(`${master.name}`, master.innerName)];
                }))
            );
    } catch (error) {
        console.error('Error while send_contacts_command processing - ', error.message);
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
    not_understand_command,
    createSendTrainerFunction,
    createSendGymFunction
}