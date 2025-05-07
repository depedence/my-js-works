// Класс асинхронного счётчика
class AsyncCounter {
  constructor() {
    this.count = 0; // внутреннее состояние — счётчик
  }

  // Асинхронное увеличение счётчика на 1 через заданную задержку
  increment(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.count += 1;
        resolve(this.count); // возвращает новое значение
      }, delay);
    });
  }

  // Получить текущее значение счётчика
  getCount() {
    return this.count;
  }
}

module.exports = { AsyncCounter };
