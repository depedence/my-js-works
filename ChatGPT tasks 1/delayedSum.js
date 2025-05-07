// Асинхронная функция, возвращающая сумму a + b через заданную задержку
function delayedSum(a, b, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b); // результат — сумма
    }, delay);
  });
}

module.exports = { delayedSum };
