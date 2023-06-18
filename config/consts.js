const BOT_COMMANDS_TEXT = `
/start - Начать общение
/list - Получить список залов в городе
/contacts - Контакты тренеров
/send_request - Задать вопрос
/help - Список команд
`;

const SEND_CONTACTS_TRIGGER_WORDS_LIST = [
    'Контакты',
    'контакты',
    'Список контактов',
    'список контактов',
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
    '<b>Я понимаю только этот текст, для отравки списка тренеров:</b>\n' +
    `<i>${SEND_CONTACTS_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>Я понимаю только этот текст, для получения списка залов:</b>\n' +
    `<i>${GYM_LIST_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>Я понимаю только этот текст, для получения списка команд:</b>\n' +
    `<i>${HELP_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>Я понимаю только этот текст, чтобы задать вопрос тренеру:</b>\n' +
    `<i>${SEND_QUESTION_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>А так же, команды:</b>\n' +
    BOT_COMMANDS_TEXT;

// Gyms array
const GYM_OLIMP =  {
    id: 'GYM_OLIMP',
    title: 'Спортивный комплекс Олимп',
    link: 'https://yandex.ru/maps/-/CCU1VBFN~A',
    address: 'Береговая улица 144',
    schedule: {
        SENSEY: [
            'ПН, СР, ПТ - с 17:00 до 18:30 Младшая группа',
            'ПН, СР, ПТ - с 18:30 до 20:00 Средняя группа',
            'ПН, СР, ПТ - с 20:00 до 21:30 Старшая группа'
        ],
        KIRILL_YUKHIMENKO: [
            'ВТ, ЧТ, СБ - с 17:00 до 18:30 Младшая группа',
            'ВТ, ЧТ, СБ - с 18:30 до 20:00 Средняя группа',
            'ВТ, ЧТ, СБ - с 20:00 до 21:30 Старшая группа'
        ],
        ZAYNULIN_NIKITA: [
            'ПН, СР, ПТ - с 12:00 до 13:30 Младшая группа',
            'ПН, СР, ПТ - с 13:30 до 15:00 Средняя группа',
            'ПН, СР, ПТ - с 15:00 до 16:30 Старшая группа'
        ],
    }
};
const GYM_31SCHOOL =  {
    id: 'GYM_31SCHOOL',
    title: 'Школа №31',
    link: 'https://yandex.ru/maps/-/CCU1RGQC2C',
    address: 'Песчаная улица, 14',
    schedule: {
        SENSEY: [
            'ПН, СР, ПТ - с 17:00 до 18:30 Младшая группа',
            'ПН, СР, ПТ - с 18:30 до 20:00 Средняя группа',
            'ПН, СР, ПТ - с 20:00 до 21:30 Старшая группа'
        ],
        IVAN_MELNIK: [
            'ВТ, ЧТ, СБ - с 17:00 до 18:30 Младшая группа',
            'ВТ, ЧТ, СБ - с 18:30 до 20:00 Средняя группа',
            'ВТ, ЧТ, СБ - с 20:00 до 21:30 Старшая группа'
        ],
    }
};
const GYM_32SCHOOL =  {
    id: 'GYM_32SCHOOL',
    title: 'Школа №32',
    link: 'https://yandex.ru/maps/-/CCU1VBu0wD',
    address: 'улица КИМ, 17',
    schedule: {
        IVAN_MELNIK: [
            'ПН, СР, ПТ - с 17:00 до 18:30 Младшая группа',
            'ПН, СР, ПТ - с 18:30 до 20:00 Средняя группа',
            'ПН, СР, ПТ - с 20:00 до 21:30 Старшая группа'
        ],
        IVAN_IVANOV: [
            'ВТ, ЧТ, СБ - с 17:00 до 18:30 Младшая группа',
            'ВТ, ЧТ, СБ - с 18:30 до 20:00 Средняя группа',
            'ВТ, ЧТ, СБ - с 20:00 до 21:30 Старшая группа'
        ],
        ZAYNULIN_NIKITA: [
            'ПН, СР, ПТ - с 12:00 до 13:30 Младшая группа',
            'ПН, СР, ПТ - с 13:30 до 15:00 Средняя группа',
            'ПН, СР, ПТ - с 15:00 до 16:30 Старшая группа'
        ],
    }
};
const GYM_KOPER =  {
    id: 'GYM_KOPER',
    title: 'Зал на кооперативном рынке',
    link: 'https://yandex.ru/maps/-/CCU1RGcD8D',
    address: 'улица Гоголя, 80',
    schedule: {
        IVAN_IVANOV: [
            'ПН, СР, ПТ - с 17:00 до 18:30 Младшая группа',
            'ПН, СР, ПТ - с 18:30 до 20:00 Средняя группа',
            'ПН, СР, ПТ - с 20:00 до 21:30 Старшая группа'
        ],
        KIRILL_YUKHIMENKO: [
            'ВТ, ЧТ, СБ - с 17:00 до 18:30 Младшая группа',
            'ВТ, ЧТ, СБ - с 18:30 до 20:00 Средняя группа',
            'ВТ, ЧТ, СБ - с 20:00 до 21:30 Старшая группа'
        ],
    }
};

// Gyms arrays for trainers
const ALL_GYMS_LIST = [ GYM_OLIMP, GYM_31SCHOOL, GYM_32SCHOOL, GYM_KOPER ];
const SENSEY_GYM_LIST = [ GYM_OLIMP, GYM_31SCHOOL ];
const IVAN_MELNIK_GYM_LIST = [ GYM_32SCHOOL, GYM_31SCHOOL ];
const IVAN_IVANOV_GYM_LIST = [ GYM_32SCHOOL, GYM_KOPER ];
const KIRILL_YUKHIMENKO_GYM_LIST = [ GYM_KOPER, GYM_OLIMP ];
const ZAYNULIN_NIKITA_GYM_LIST = [ GYM_OLIMP, GYM_32SCHOOL ];

const TRAINERS_ARRAY = [
    {
        id: 1,
        innerName: 'SENSEY',
        phoneName: 'Самвел Александрович сенсей',
        name: 'Самвел Александрович',
        phone: '+7(918)315-37-00',
        picture: 'https://karate.ru/media/images/2016/8/2/img-20160521-wa0032.jpg',
        gymsList: SENSEY_GYM_LIST
    },
    {
        id: 2,
        innerName: 'IVAN_MELNIK',
        phoneName: 'Мельник Иван сенсей',
        name: 'Мельник Иван',
        phone: '+7(999)999-99-99',
        picture: 'https://karate.ru/media/images/2016/8/2/img-20160521-wa0032.jpg',
        gymsList: IVAN_MELNIK_GYM_LIST
    },
    {
        id: 3,
        innerName: 'IVAN_IVANOV',
        phoneName: 'Иванов Иван сенсей',
        name: 'Иванов Иван',
        phone: '+7(999)999-99-99',
        picture: 'https://karate.ru/media/images/2016/8/2/img-20160521-wa0032.jpg',
        gymsList: IVAN_IVANOV_GYM_LIST
    },
    {
        id: 4,
        innerName: 'KIRILL_YUKHIMENKO',
        phoneName: 'Юхименко Кирилл сенсей',
        name: 'Юхименко Кирилл',
        phone: '+7(999)999-99-99',
        picture: 'https://karate.ru/media/images/2016/8/2/img-20160521-wa0032.jpg',
        gymsList: KIRILL_YUKHIMENKO_GYM_LIST
    },
    {
        id: 5,
        innerName: 'ZAYNULIN_NIKITA',
        phoneName: 'Зайнулин Никита сенсей',
        name: 'Зайнулин Никита',
        phone: '+7(999)999-99-99',
        picture: 'https://karate.ru/media/images/2016/8/2/img-20160521-wa0032.jpg',
        gymsList: ZAYNULIN_NIKITA_GYM_LIST
    },
];

export {
    BOT_COMMANDS_TEXT,
    SEND_CONTACTS_TRIGGER_WORDS_LIST,
    HELP_TRIGGER_WORDS_LIST,
    GYM_LIST_TRIGGER_WORDS_LIST,
    SEND_QUESTION_TRIGGER_WORDS_LIST,
    OTHER_TEXT_ANSWER,
    TRAINERS_ARRAY,
    ALL_GYMS_LIST
}

