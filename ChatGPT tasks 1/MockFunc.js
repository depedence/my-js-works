// Функция: пробует выполнить action до 3 раз
async function retryAction(action, maxRetries = 3) {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      return await action(); // Пытаемся выполнить
    } catch (err) {
      attempt++;
      if (attempt >= maxRetries) {
        throw new Error("All retries failed");
      }
    }
  }
}

module.exports = { retryAction };
