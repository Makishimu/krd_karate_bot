import { Telegraf, Scenes, session } from 'telegraf' ;
import dotenv from 'dotenv';
dotenv.config();

// Подключение функций комманд
import {
    start,
    help,
    gymsList,
    send_contacts_command,
    not_understand_command,
    createSendTrainerFunction,
    createSendGymFunction
} from './contrllers/commands.js';

// Подключение констант
import {
    SEND_CONTACTS_TRIGGER_WORDS_LIST,
    HELP_TRIGGER_WORDS_LIST,
    GYM_LIST_TRIGGER_WORDS_LIST,
    SEND_QUESTION_TRIGGER_WORDS_LIST,
    TRAINERS_ARRAY,
    ALL_GYMS_LIST
} from './config/consts.js';
// Подключение шагов для сцены

import {
    startWizardStep,
    requestTextStep,
    contactsStep,
    sendContactsStep
} from "./contrllers/scenes.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

const setupBot = ()=> {

    // Создание и работа со сценой отправки данных для связи
    const requestConnectionScene = new Scenes.WizardScene(
        'requestConnectionWizard',
        startWizardStep,
        requestTextStep,
        contactsStep,
        sendContactsStep
    );

    const stage = new Scenes.Stage([requestConnectionScene]);
    bot.use(session());
    bot.use(stage.middleware());

    // Обработка команд
    bot.start(start);
    bot.help(help);
    bot.command('contacts',  send_contacts_command);
    bot.command('list',  gymsList);
    bot.command('send_request',  async ctx => {
        await ctx.scene.enter('requestConnectionWizard');
    });

    // Добавление тригеров на нажатие кнопок тренеров
    TRAINERS_ARRAY.forEach(async master => {
        await createSendTrainerFunction(bot, master);
    })
    // Добавление тригеров на нажатие кнопок залов
    ALL_GYMS_LIST.forEach(async gym => {
        await createSendGymFunction(bot, gym);
    })


    // Обработка текстовых сообщений
    bot.hears(SEND_CONTACTS_TRIGGER_WORDS_LIST, send_contacts_command);
    bot.hears(HELP_TRIGGER_WORDS_LIST, help);
    bot.hears(GYM_LIST_TRIGGER_WORDS_LIST, gymsList);
    bot.hears(SEND_QUESTION_TRIGGER_WORDS_LIST, async ctx => {
        await ctx.scene.enter('requestConnectionWizard');
    });
    bot.on('message', not_understand_command);

    return bot;
};

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export {
    setupBot
};