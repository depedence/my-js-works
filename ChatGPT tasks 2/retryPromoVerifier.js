// Функция, которая проверяет промокод с повторными попытками
async function verifyPromoCodeWithRetry(code, checkPromo, maxRetries = 3) {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const result = await checkPromo(code); // вызываем API

      if (!result.valid) {
        throw new Error("Invalid promo code");
      }

      return result.discount;
    } catch (error) {
      attempt++;

      // если это последняя попытка — бросаем ошибку
      if (attempt === maxRetries) {
        throw new Error("Failed to verify promo code");
      }
    }
  }
}

module.exports = { verifyPromoCodeWithRetry };
