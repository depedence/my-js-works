// Асинхронная функция применения скидки
async function applyDiscount(cart, fetchDiscount, userId) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Получаем скидку от внешнего API
  const discountPercent = await fetchDiscount(userId); // например, 10 для 10%

  const finalTotal = total - total * (discountPercent / 100);

  return Math.round(finalTotal); // округляем до целого
}

module.exports = { applyDiscount };
