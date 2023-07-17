import { Composer } from 'telegraf' ;

export const startWizardStep = new Composer();
export const requestTextStep = new Composer();
export const contactsStep = new Composer();
export const sendContactsStep = new Composer();

startWizardStep.on('text', async ctx => {
    ctx.wizard.state.data = {};
    await ctx.replyWithHTML(
        '<i>Отсылая свои контактные данные, Вы даёте своё согласие на их хранение и обработку.</i>\n\n' +
        'По умолчанию, на вопросы отвечает сенсей (тренер) - Самвел Александрович, но Вы можете написать обращение ' +
        'и к другому тренеру. Просто, напишите в начале текста, к кому он обращён и далее Ваш вопрос.\n\n' +
        'Отправка запроса будет проходить в несколько шагов\n <b>сейчас Вы на первом шаге.</b>\n\n' +
        '<b>Задайте свой вопрос тренеру:</b>\n\n'
    );
    return ctx.wizard.next();
});
requestTextStep.on('text', async ctx => {
    ctx.wizard.state.data.request = ctx.message.text;
    await ctx.replyWithHTML(
        '<b>Это второй шаг:</b>\n\n' +
        'Укажите <b>Ваше имя</b>, чтобы тренеру было понтяно как к Вам обращаться при ответе.'
    );
    return ctx.wizard.next();
});
contactsStep.on('text', async ctx => {
    ctx.wizard.state.data.name = ctx.message.text;
    await ctx.replyWithHTML(
        '<b>Это третий шаг:</b>\n\n' +
        'Укажите <b>Ваш номер телефона</b>, вида <i>+7(999)999-99-99</i>, и тренер ответит, дуступным для него способом.'
    );
    return ctx.wizard.next();
});
sendContactsStep.on('text', async ctx => {
    ctx.wizard.state.data.number = ctx.message.text;
    ctx.wizard.state.data.username = ctx.message.from.username || false;
    await ctx.replyWithHTML(
        '<b>Благодарю за обращение, тренер обязательно свяжется в Вами.</b>'
    );
    await ctx.telegram.sendMessage(
        process?.env?.ADMIN_ID,
        'Внимание, поступил новый вопрос!\n\n' +
        `Текст обращения:\n${ctx.wizard.state.data.request}.\n\n` +
        'Контактные данные:\n' +
        `Как обращаться - ${ctx.wizard.state.data.name}.\n` +
        `Телефон - ${ctx.wizard.state.data.number}.\n` +
        `${ctx.wizard.state.data.username ?
            `Пользователя можно найти в телеграме по нику @${ctx.wizard.state.data.username}` : ''
        }`
    );
    return ctx.scene.leave();
});