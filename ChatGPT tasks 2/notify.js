// Класс, реализующий систему уведомлений

class Notifier {
  constructor() {
    this.listeners = new Set(); // множество подписчиков
  }

  // Добавляет слушателя
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback); // возвращает функцию для отписки
  }

  // Отправляет событие всем подписчикам
  notify(event) {
    for (const listener of this.listeners) {
      listener(event);
    }
  }

  // Возвращает количество активных подписчиков
  getSubscriberCount() {
    return this.listeners.size;
  }
}

module.exports = { Notifier };
