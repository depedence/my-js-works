const { delayedSum } = require("./delayedSum");

describe("delayedSum", () => {
  test("возвращает сумму двух чисел после задержки", async () => {
    const result = await delayedSum(5, 3, 500);

    expect(result).toBe(8);
  });

  test("работает с нулевой задержкой", async () => {
    const result = await delayedSum(10, 5, 0);

    expect(result).toBe(15);
  });
});
