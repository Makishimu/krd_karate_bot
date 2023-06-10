const BOT_COMMANDS_TEXT = `
/start - Начать общение
/list - Плучить список залов в городе
/contacts - Контакты сенсеев
/save_contacts - Получить контакты сенсеев для сохранения в телефон
/send_request - Задать вопрос
/help - Список команд
`;

const DIFFERENT_ACTIONS_BUTTONS = {
    sendContacts: {
        id: '5_send_contacts',
        title: 'Контакты'
    },
    addContacts: {
        id: '6_add_contacts',
        title: 'Сохранить контакты'
    }
};

const SEND_CONTACTS_TRIGGER_WORDS_LIST = [
    'Контакты',
    'контакты',
    'Список контактов',
    'список контактов'
];
const ADD_CONTACTS_TRIGGER_WORDS_LIST = [
    'Контакты на телефон',
    'контакты на телефон',
    'Сохранить контакты',
    'сохранить контакты'
];
const HELP_TRIGGER_WORDS_LIST = [
    'Список команд',
    'список команд',
    'Помощь',
    'помощь'
];
const GYM_LIST_TRIGGER_WORDS_LIST = [
    'Список залов',
    'список залов',
    'Залы',
    'залы'
];

const SEND_QUESTION_TRIGGER_WORDS_LIST = [
    'Обратная связь',
    'обратная связь',
    'Написать сенсею',
    'написать сенсею',
    'Задать вопрос',
    'задать вопрос'
];

const OTHER_TEXT_ANSWER =
    'Что-что? Не понял. Видимо, это не совсем тот текст, что я ожидаю получить от Вас.\n\n' +
    '<b>Я понимаю только этот текст, для отравки списка контактов:</b>\n' +
    `<i>${SEND_CONTACTS_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>Я понимаю только этот текст, для сохранения контактов в телефон:</b>\n' +
    `<i>${ADD_CONTACTS_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>Я понимаю только этот текст, для получения списка команд:</b>\n' +
    `<i>${HELP_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>Я понимаю только этот текст, для получения списка залов:</b>\n' +
    `<i>${GYM_LIST_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>Я понимаю только этот текст, чтобы задать вопрос мастеру:</b>\n' +
    `<i>${SEND_QUESTION_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>А так же, команды:</b>\n' +
    BOT_COMMANDS_TEXT;

// Gyms consts
const GYM_OLIMP =  {
    id: 'GYM_OLIMP',
    title: 'Спортивный комплекс Олимп',
    link: 'https://yandex.ru/maps/-/CCU1VBFN~A',
    address: 'Береговая улица 144'
};
const GYM_31SCHOOL =  {
    id: 'GYM_31SCHOOL',
    title: 'Школа №31',
    link: 'https://yandex.ru/maps/-/CCU1RGQC2C',
    address: 'Песчаная улица, 14'
};
const GYM_32SCHOOL =  {
    id: 'GYM_32SCHOOL',
    title: 'Школа №32',
    link: 'https://yandex.ru/maps/-/CCU1VBu0wD',
    address: 'улица КИМ, 17'
};
const GYM_KOPER =  {
    id: 'GYM_KOPER',
    title: 'Зал на кооперативном рынке',
    link: 'https://yandex.ru/maps/-/CCU1RGcD8D',
    address: 'улица Гоголя, 80'
};

// Gyms arrays for trainers
const ALL_GYMS_LIST = [ GYM_OLIMP, GYM_31SCHOOL, GYM_32SCHOOL, GYM_KOPER ];
const SENSEY_GYM_LIST = [ GYM_OLIMP, GYM_31SCHOOL ];
const IVAN_MELNIK_GYM_LIST = [ GYM_32SCHOOL, GYM_31SCHOOL ];
const KIRILL_MELNIK_GYM_LIST = [ GYM_32SCHOOL, GYM_KOPER ];
const KIRILL_YUKHIMENKO_GYM_LIST = [ GYM_KOPER, GYM_OLIMP ];
const ZAYNULIN_NIKITA_GYM_LIST = [ GYM_OLIMP, GYM_32SCHOOL ];

const MASTERS_ARRAY = [
    {
        id: 1,
        innerName: 'SENSEY',
        phoneName: 'Самвел Александрович сенсей',
        name: 'Самвел Александрович',
        phone: '+7(918)315-37-00',
        picture: 'https://sun57-2.userapi.com/impg/iVMzcEieKrza52oGIBGaasi2nL_2nBRw-BNVbw/I1lgKwQhuMQ.jpg?size=1242x1197&quality=96&sign=2de3df8a745b4f53c92db89c22b55334&type=album',
        gymsList: SENSEY_GYM_LIST
    },
    {
        id: 2,
        innerName: 'IVAN_MELNIK',
        phoneName: 'Мельник Иван сенсей',
        name: 'Мельник Иван',
        phone: '+7(999)999-99-99',
        picture: 'https://sun9-32.userapi.com/impg/K4qdZqUZC8lTsFFnsJl3Pvniy9lbzMRNmXCtxg/S_IOjgvOue4.jpg?size=828x1100&quality=95&sign=81e284c2b65663320ec800454671e741&type=album',
        gymsList: IVAN_MELNIK_GYM_LIST
    },
    {
        id: 3,
        innerName: 'KIRILL_MELNIK',
        phoneName: 'Мельник Кирилл сенсей',
        name: 'Мельник Кирилл',
        phone: '+7(999)999-99-99',
        picture: 'https://sun9-77.userapi.com/impg/c853516/v853516077/1d465a/n3QEjZJPPPQ.jpg?size=959x1280&quality=96&sign=5d04c77ad953251f073b4cf9df76ba3a&type=album',
        gymsList: KIRILL_MELNIK_GYM_LIST
    },
    {
        id: 4,
        innerName: 'KIRILL_YUKHIMENKO',
        phoneName: 'Юхименко Кирилл сенсей',
        name: 'Юхименко Кирилл',
        phone: '+7(999)999-99-99',
        picture: 'https://sun9-38.userapi.com/impf/c845218/v845218875/23169/0FVavVNILgc.jpg?size=1066x1600&quality=96&sign=c6f83e6babf076130262c7999c1d9be2&type=album',
        gymsList: KIRILL_YUKHIMENKO_GYM_LIST
    },
    {
        id: 5,
        innerName: 'ZAYNULIN_NIKITA',
        phoneName: 'Зайнулин Никита сенсей',
        name: 'Зайнулин Никита ',
        phone: '+7(999)999-99-99',
        picture: 'https://sun9-7.userapi.com/impf/c628623/v628623406/401a1/gqtLehM43JA.jpg?size=1067x1067&quality=96&sign=3c12eac8d39556b7763985e1f5e573e5&type=album',
        gymsList: ZAYNULIN_NIKITA_GYM_LIST
    },
];

export {
    BOT_COMMANDS_TEXT,
    DIFFERENT_ACTIONS_BUTTONS,
    SEND_CONTACTS_TRIGGER_WORDS_LIST,
    ADD_CONTACTS_TRIGGER_WORDS_LIST,
    HELP_TRIGGER_WORDS_LIST,
    GYM_LIST_TRIGGER_WORDS_LIST,
    SEND_QUESTION_TRIGGER_WORDS_LIST,
    OTHER_TEXT_ANSWER,
    MASTERS_ARRAY,
    ALL_GYMS_LIST
}

