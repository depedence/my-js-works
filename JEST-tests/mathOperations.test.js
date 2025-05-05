const mathOperations = require("./mathOperations");

describe("Math operations tests", () => {
  test("add 1 + 2 = 3", () => {
    expect(mathOperations.add(1, 2)).toBe(3);
  });

  test("subtract 3 - 2 = 1", () => {
    expect(mathOperations.subtract(3, 2)).toBe(1);
  });

  test("multiply 3 * 2 = 6", () => {
    expect(mathOperations.multiply(3, 2)).toBe(6);
  });

  test("divide 10 / 2 = 5 and return null when dividing by 0", () => {
    expect(mathOperations.divide(10, 2)).toBe(5);
    expect(mathOperations.divide(10, 0)).toBeNull();
  });

  test("isEven 4", () => {
    expect(mathOperations.isEven(4)).toBeTruthy();
  });

  test("isEven 5", () => {
    expect(mathOperations.isEven(5)).toBeFalsy();
  });
});
