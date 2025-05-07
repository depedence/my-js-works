// Простые математические операции
const mathOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b === 0 ? null : a / b), // Возвращаем null при делении на 0
  isEven: (num) => num % 2 === 0,
};

module.exports = mathOperations;
