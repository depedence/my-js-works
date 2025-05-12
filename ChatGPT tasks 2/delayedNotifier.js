class DelayedNotifier {
  constructor(delay = 1000) {
    this.delay = delay; // задержка перед отправкой
    this.subscribers = new Set();
    this._timers = new Set(); // активные таймеры
  }

  // Подписка на уведомления
  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  // Отправляет событие с задержкой
  notifyLater(event) {
    const timer = setTimeout(() => {
      for (const cb of this.subscribers) {
        cb(event);
      }
      this._timers.delete(timer);
    }, this.delay);

    this._timers.add(timer);
  }

  // Отмена всех отложенных уведомлений
  cancelAll() {
    for (const timer of this._timers) {
      clearTimeout(timer);
    }
    this._timers.clear();
  }
}

module.exports = { DelayedNotifier };
