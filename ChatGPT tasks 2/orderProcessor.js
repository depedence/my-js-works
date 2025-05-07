// Функция обработки заказа
function processOrder(cart, notify) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (total > 500) {
    notify(`Large order`);
  }

  return total;
}

module.exports = { processOrder };
