const { delayedDivide } = require("./delayedDivide");

describe("delayedDivid", () => {
  test("делит два числа после задержки", async () => {
    const result = await delayedDivide(10, 5, 500);

    expect(result).toBe(2);
  });

  test("ошибка при делении на ноль", async () => {
    await expect(delayedDivide(10, 0, 100)).rejects.toThrow(
      "Cannot divide by zero",
    );
  });

  test("проверка на нулевую задержку", async () => {
    const result = await delayedDivide(10, 5, 0);

    expect(result).toBe(2);
  });
});
