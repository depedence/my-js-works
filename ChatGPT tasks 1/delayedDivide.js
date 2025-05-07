// Асинхронная функция деления с задержкой
function delayedDivide(a, b, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject(new Error("Cannot divide by zero")); // Ошибка при делении на 0
      } else {
        resolve(a / b); // Обычное деление
      }
    }, delay);
  });
}

module.exports = { delayedDivide };
