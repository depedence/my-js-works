const { TaskProcessor } = require("./taskProcessor");

describe("Проверка TaskProcessor от ChatGPT", () => {
  test("Проверка на обрабатывание задачи и обновление баланса", () => {
    const tp = new TaskProcessor(100);

    const tasks = [
      {
        id: 1,
        type: "credit",
        amount: 50,
        status: "pending",
      },
    ];

    tp.processTasks(tasks);

    expect(tp.getBalance()).toBe(150);
    expect(tasks[0].status).toEqual("success");
    expect(tp.getLog()).toContain("Task 1 succeeded");
  });

  test("Успешно обрабатывает debit-задачи, если достаточно средств", () => {
    const tp = new TaskProcessor(200);

    const tasks = [
      {
        id: 2,
        type: "debit",
        amount: 100,
        status: "pending",
      },
    ];

    tp.processTasks(tasks);

    expect(tp.getBalance()).toBe(100);
    expect(tasks[0].status).toEqual("success");
    expect(tp.getLog()).toContain("Task 2 succeeded");
  });

  test("Помечает задачу как failed при недостатке средств", () => {
    const tp = new TaskProcessor(200);

    const tasks = [
      {
        id: 3,
        type: "debit",
        amount: 300,
        status: "pending",
      },
    ];

    tp.processTasks(tasks);

    expect(tp.getBalance()).toBe(200);
    expect(tasks[0].status).toEqual("failed");
    expect(tp.getLog()[0]).toMatch(/Task 3 failed: Insufficient funds/);
  });

  test("игнорирует задачи с неверным статусом", () => {
    const processor = new TaskProcessor(100);
    const tasks = [
      { id: 4, type: "credit", amount: 20, status: "success" }, // неверный статус
    ];

    processor.processTasks(tasks);

    expect(processor.getBalance()).toBe(100);
    expect(tasks[0].status).toBe("failed");
    expect(processor.getLog()[0]).toMatch(/Task 4 failed: Invalid task status/);
  });

  test("обрабатывает задачи с некорректной суммой (0 или отрицательная)", () => {
    const processor = new TaskProcessor(100);
    const tasks = [
      { id: 5, type: "credit", amount: 0, status: "pending" },
      { id: 6, type: "debit", amount: -10, status: "pending" },
    ];

    processor.processTasks(tasks);

    expect(processor.getBalance()).toBe(100); // ничего не изменилось
    expect(tasks[0].status).toBe("failed");
    expect(tasks[1].status).toBe("failed");
    expect(processor.getLog()[0]).toMatch(/Task 5 failed: Invalid amount/);
    expect(processor.getLog()[1]).toMatch(/Task 6 failed: Invalid amount/);
  });

  test("обрабатывает задачи с неизвестным типом", () => {
    const processor = new TaskProcessor(100);
    const tasks = [{ id: 7, type: "transfer", amount: 10, status: "pending" }];

    processor.processTasks(tasks);

    expect(processor.getBalance()).toBe(100);
    expect(tasks[0].status).toBe("failed");
    expect(processor.getLog()[0]).toMatch(/Task 7 failed: Unknown task type/);
  });
});
