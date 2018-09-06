// Для асинхронной работы используется пакет micro.
const { json } = require('micro');

// Запуск асинхронного сервиса.
module.exports = async req => {

    // Из запроса извлекаются свойства request, session и version.
    const { request, session, version } = await json(req);
    var returnText = 'Приветики';
    // В тело ответа вставляются свойства version и session из запроса.
    // Подробнее о формате запроса и ответа — в разделе Протокол работы навыка
    if(~request.original_utterance.indexOf('андре')){
        returnText = 'Андрей лучший проджект в мире, даже лучше Илона Маска. Алиса точно в этом уверена';
    }
    if(~request.original_utterance.indexOf('тимур')){
        returnText = 'Просто лучший';
    }
    var timer = 1;

    return {
        version,
        session,
        response: {

            // В свойстве response.text возвращается исходная реплика пользователя.
            // Если навык был активирован без дополнительной команды,
            // пользователю нужно сказать "Hello!".
            text: returnText,

            // Свойство response.end_session возвращается со значением false,
            // чтобы диалог не завершался.
            end_session: false,
        },
    };
};
