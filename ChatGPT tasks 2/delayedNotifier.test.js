const { DelayedNotifier } = require("./delayedNotifier")

jest.useFakeTimers() // включаем фейковые таймеры

describe('{ DelayedNotifier }', () => {

    test('уведомляет всех подписчиков после задержки', () => {
        const notifier = new DelayedNotifier(500)
        const sb = jest.fn()

        notifier.subscribe(sb)
        notifier.notifyLater({ type: 'Hello!' })

        // пока еще не должно быть вызова
        expect(sb).not.toHaveBeenCalled()

        // продвигаем время вперёд
        jest.advanceTimersByTime(500)

        // теперь вызов должен быть
        expect(sb).toHaveBeenCalledTimes(1)
        expect(sb).toHaveBeenCalledWith({ type: 'Hello!' })
    })

    test('отменяет все отложенные уведомления', () => {
        const notifier = new DelayedNotifier(1000)
        const sb = jest.fn()

        notifier.subscribe(sb)
        notifier.notifyLater({ type: 'A' })
        notifier.notifyLater({ type: 'B' })

        notifier.cancelAll()    // отменяет все уведомления

        jest.advanceTimersByTime(1000)

        expect(sb).not.toHaveBeenCalled() // не вызовется
    })

    test('если отписаться, то не будешь получать уведомления', () => {
        const notifier = new DelayedNotifier(300)
        const sb = jest.fn()

        const unsubscriber = notifier.subscribe(sb)
        notifier.notifyLater({ type: 'FIRST' })

        unsubscriber()

        jest.advanceTimersByTime(300)

        expect(sb).not.toHaveBeenCalled()
    })

})
