const { AsyncCounter } = require("./asyncCounter");

describe("AsyncCounter", () => {
  test("увеличивает счётчик через заданную задержку", async () => {
    const counter = new AsyncCounter();

    expect(counter.getCount()).toBe(0); // начальное значение

    await counter.increment(100);

    expect(counter.getCount()).toBe(1);
  });

  test("увеличивает счётчик несколько раз", async () => {
    const counter = new AsyncCounter();

    await counter.increment(50);
    await counter.increment(50);
    await counter.increment(50);

    expect(counter.getCount()).toBe(3);
  });

  test("работает с нулевой задержкой", async () => {
    const counter = new AsyncCounter();

    await counter.increment(0);

    expect(counter.getCount()).toBe(1);
  });
});
