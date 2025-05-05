describe("Группа тестов по проверке арифметических действий", () => {
  test("Сумма 5 + 4", () => {
    expect(5 + 4).toBe(9);
  });

  test("Вычитание 5 - 4", () => {
    expect(5 - 4).toBe(1);
  });

  test("Умножение 5 * 4", () => {
    expect(5 * 4).toBe(20);
  });

  afterAll(() => {
    console.log("afterAll : Тесты выполнены успешно");
  });
});

const shoppingList = [
  "diaspers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

describe("Все варианты сравнения правдивости", () => {
  test("object assignment // назначение объекта", () => {
    let data = { one: 1 };
    data["two"] = 2;

    expect(data).toEqual({ one: 1, two: 2 });
  });

  test("Сложение положительных чисел, не равных нулю", () => {
    for (let a = 1; a < 10; a++) {
      for (let b; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("ноль", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test("2 + 2; все сравнения результата сложения", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); // > 3
    expect(value).toBeGreaterThanOrEqual(3.5); // >= 3.5
    expect(value).toBeLessThan(5); // < 5
    expect(value).toBeLessThanOrEqual(4.5); // <= 4.5
  });

  test("В слове команда нет буквы Я", () => {
    expect("команда").not.toMatch(/Я/);
  });

  test("Но в слове Вася есть ася", () => {
    expect("Вася").toMatch(/ася/);
  });
});
