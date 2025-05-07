const { TaskProcessor } = require("./taskProc");

describe("Task processor 2", () => {
  test("выполняет все задачи по очереди", async () => {
    const log = [];
    const task1 = jest.fn(() => Promise.resolve(log.push("A")));
    const task2 = jest.fn(() => Promise.resolve(log.push("B")));

    const processor = new TaskProcessor(10); // пауза между задачами

    processor.addTask("1", task1);
    processor.addTask("2", task2);

    await processor.run();

    expect(task1).toHaveBeenCalled();
    expect(task2).toHaveBeenCalled();
    expect(log).toEqual(["A", "B"]);
    expect(processor.getLogs()).toEqual([
      "Task 1 succeeded",
      "Task 2 succeeded",
    ]);
  });

  test("обрабатывает ошибки и продолжает выполнение", async () => {
    const task1 = jest.fn(() => Promise.reject("fail"));
    const task2 = jest.fn(() => Promise.resolve());

    const processor = new TaskProcessor(10);

    processor.addTask("X", task1);
    processor.addTask("Y", task2);

    await processor.run();

    expect(task1).toHaveBeenCalled();
    expect(task2).toHaveBeenCalled();
    expect(processor.getLogs()).toEqual(["Task X failed", "Task Y succeeded"]);
  });
});
