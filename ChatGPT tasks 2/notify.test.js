const { Notifier } = require("./notify")

describe('{ Notifier }', () => {

    test('уведомляет всех подписчиков', () => {
        const notifier = new Notifier()

        const sb1 = jest.fn()
        const sb2 = jest.fn()

        notifier.subscribe(sb1)
        notifier.subscribe(sb2)

        notifier.notify({ type: 'EVENT_X', data: 123 })

        expect(sb1).toHaveBeenCalledWith({ type: 'EVENT_X', data: 123 })
        expect(sb2).toHaveBeenCalledWith({ type: 'EVENT_X', data: 123 })
    })

    test('отписывает конкретно', () => {
        const notifier = new Notifier()

        const sb = jest.fn()

        const unsubscriber = notifier.subscribe(sb)
        notifier.notify({ type: 'BEFORE' })

        unsubscriber()
        notifier.notify({ type: 'AFTER' })

        expect(sb).toHaveBeenCalledTimes(1)
        expect(sb).toHaveBeenCalledWith({ type: 'BEFORE' })
    })

})
