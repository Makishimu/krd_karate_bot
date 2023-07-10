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
    '<b>Я понимаю только этот текст, для вывода списка тренеров:</b>\n' +
    `<i>${SEND_CONTACTS_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>Я понимаю только этот текст, для вывода списка залов:</b>\n' +
    `<i>${GYM_LIST_TRIGGER_WORDS_LIST.join(', ')}</i>.\n\n` +
    '<b>Я понимаю только этот текст, для вывода списка команд:</b>\n' +
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
            'ВТ, ЧТ, (СБ) - 18:00-18:45 (10:00-10:45) Младшая группа с 4 до 6 лет',
            'ВТ, ЧТ, (СБ) - 18:45-20:00 (10:45-12:00) Средняя группа с 7-9 лет',
            'ВТ, ЧТ, (СБ) - 20:00-21:30 (12:00-13:30) Старшая группа с 10 лет',
            'ПН, СР, ПТ - 9:00-10:30 Утренняя группа ( общая )',
        ],
    }
};

const GYM_31SCHOOL =  {
    id: 'GYM_31SCHOOL',
    title: 'Школа №31',
    link: 'https://yandex.ru/maps/-/CCU1RGQC2C',
    address: 'Песчаная улица, 14',
    schedule: {
        KIRILL_YUKHIMENKO: [
            'ПН, СР, ПТ - 18:00-19:15 Младшая группа до 8 лет',
            'ПН, СР, ПТ - 19:15-20:30 Старшая группа 8+ ',
        ],
    }
};

const GYM_66SCHOOL =  {
    id: 'GYM_66SCHOOL',
    title: 'Школа №66',
    link: 'https://yandex.ru/maps/-/CHdMMiT',
    address: 'Уссурийская улица, 2',
    schedule: {
        SENSEY: [
            'ВТ, ЧТ, (СБ) - 18:30-19:30 (14:00-15:00) Первая группа',
            'ВТ, ЧТ, (СБ) - 19:30-20:30 (15:00-16:30) Вторая групп',
            'ВТ, ЧТ, (СБ) - 20:30-22:00 (16:30-18:00) Третья группа',
        ],
    }
};

const GYM_KORENOVSKIY =  {
    id: 'GYM_KORENOVSKIY',
    title: 'ТЦ Кореновский',
    link: 'https://yandex.ru/maps/-/CHX-7eq',
    address: 'Кореновская улица, 1 (3 этаж, вход со стороны Дзержинского)',
    schedule: {
        ELIZAVETA_MELNIKOVA: [
            'ПН, СР, (СБ) - 18:30–19:30 (10:00–11:30)',
            'ПН, СР, ПТ - 19:15-20:30 Старшая группа 8+ ',
        ],
    }
};

const GYM_BOCHARNIKOVA =  {
    id: 'GYM_BOCHARNIKOVA',
    title: 'Спортзал на Бочарникова',
    link: 'https://yandex.ru/maps/-/CHdA7mS',
    address: 'улица имени Героя Георгия Бочарникова, 8',
    schedule: {
        ELIZAVETA_MELNIKOVA: [
            'утреннее и вечернее время',
        ],
    }
};

const GYM_SPORT_ZONE =  {
    id: 'SPORT_ZONE',
    title: 'Фитнес клуб - Спорт Zone',
    link: 'https://yandex.ru/maps/-/CHXPizD',
    address: 'Народная ул. 39',
    schedule: {
        ZAYNULIN_NIKITA: [
            'ПН, СР, ПТ - 18:00-19:30 Средняя группа 7-9 лет',
            'ПН, СР, ПТ - 19:30-21:00 Старшая группа  10-17 лет ',
            'ВТ, ЧТ, (СБ) - 18:00-19:00 (10:00-11:00) Младшая группа 4-6 лет',
        ],
    }
};

// Gyms arrays for trainers
const ALL_GYMS_LIST = [ GYM_OLIMP, GYM_31SCHOOL, GYM_66SCHOOL, GYM_SPORT_ZONE, GYM_KORENOVSKIY ];
const SENSEY_GYM_LIST = [ GYM_OLIMP, GYM_66SCHOOL ];
const ELIZAVETA_MELNIKOVA_GYM_LIST = [ GYM_KORENOVSKIY, GYM_BOCHARNIKOVA ];
const KIRILL_YUKHIMENKO_GYM_LIST = [ GYM_31SCHOOL, GYM_OLIMP ];
const ZAYNULIN_NIKITA_GYM_LIST = [ GYM_SPORT_ZONE, ];

const TRAINERS_ARRAY = [
    {
        id: 1,
        innerName: 'SENSEY',
        phoneName: 'Самвел Александрович сенсей',
        name: 'Самвел Александрович',
        phone: '+7(918)315-37-00',
        picture: 'https://karate.ru/media/images/2016/8/2/img-20160521-wa0032.jpg',
        gymsList: SENSEY_GYM_LIST,
        mainInfo: 'Тренер сборной Краснодарского края (Юрфкк).\n' +
            'Черный пояс 4 Дан.\n' +
            'Тренер высшей категории.\n' +
            'Воспитал чемпионов России, Европы и мира.\n' +
            'Мастеров спорта России. \n' +
            'Мастеров спорта международного класса!\n' +
            'Бранч-чиф Краснодарского края',
    },
    {
        id: 2,
        innerName: 'ELIZAVETA_MELNIKOVA',
        phoneName: 'Елизавета Николаевна сенсей',
        name: 'Мельникова Елизавета Николаевна',
        phone: '+7(988)083-10-93',
        picture: 'https://karate.ru/media/images/2016/8/2/img-20160521-wa0032.jpg',
        gymsList: ELIZAVETA_MELNIKOVA_GYM_LIST,
        mainInfo: '🎖звание Мастера Спорта Международного Класса\n' +
            '🏅Чёрный пояс 1 дан IKO.                \n' +
            '🥇Чемпионка Европы 2019 (Польша)\n' +
            '🥈2 место Кубок России 2020 (г.Москва)\n' +
            '🥈Серебряная Призёрка Чемпионата Европы 2019 (Польша)\n' +
            '🥉Бронзовая призёрка Чемпионата мира 2018 (Япония)\n' +
            '🥇5-ти кратная чемпионка России 2011−2015 (г.Москва)\n' +
            '🥉Бронзовая Призёрка Чемпионата России среди женщин 2016 (г. Москва)\n' +
            '🥇6-ти кратная чемпионка Дальневосточного ФО 2009−2014 (г.Хабаровск)\n' +
            '🥇7-ии кратная чемпионка Южного ФО 2015−2020 и 2023 г. (г.Краснодар)\n' +
            '🥇Многократная чемпионка краевых и областных соревнований 2004−2019гг.\n',
        additionalInfoL: 'В ПРОГРАММУ ОБУЧЕНИЯ ВХОДИТ:\n' +
            '◾️тренировки под моим руководством в оборудованном зале с использованием спец. инвентаря;\n' +
            ' \n' +
            '◾️учебно-тренировочные сборы в горах и на море. Городские, Краевые , Российские и международные соревнования;\n' +
            ' \n' +
            '◾️получение квалификационных степеней, спортивных разрядов и званий РФ;\n' +
            ' \n' +
            '◾️психологическая устойчивость в экстремальных ситуациях;\n' +
            ' \n' +
            '◾️семинары от ведущих специалистов;\n' +
            ' \n' +
            '◾️возможность в будущем стать тренером-преподавателем.'
    },
    {
        id: 4,
        innerName: 'KIRILL_YUKHIMENKO',
        phoneName: 'Юхименко Кирилл сенсей',
        name: 'Юхименко Кирилл',
        phone: '+7(928)429-98-91 ',
        picture: 'https://karate.ru/media/images/2016/8/2/img-20160521-wa0032.jpg',
        gymsList: KIRILL_YUKHIMENKO_GYM_LIST,
        mainInfo: 'Неоднократный чемпион и призёр ЮФО.\n' +
            'Призер всероссийских соревнований.\n' +
            'Черный пояс 1 Дан.\n'
    },
    {
        id: 5,
        innerName: 'ZAYNULIN_NIKITA',
        phoneName: 'Никита Василевич сенсей',
        name: 'Зайнулин Никита Василевич',
        phone: '+7(938)513-08-08',
        picture: 'https://karate.ru/media/images/2016/8/2/img-20160521-wa0032.jpg',
        gymsList: ZAYNULIN_NIKITA_GYM_LIST,
        mainInfo: 'Чемпион первенства Европы.\n' +
            'Кандидат в мастера спорта.\n' +
            'Черный пояс 2 Дан.\n'
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

