const TodoList = require("./todoList");

describe("TodoList", () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test("Проверка на добавление задачи", () => {
    const task = todoList.addTask("Learn Jest");
    expect(task).toEqual({ id: 1, text: "Learn Jest", completed: false });
    expect(todoList.getTasks().length).toBe(1);
  });

  test("Проверка на ошибку, если текст задачи невалиден", () => {
    expect(() => todoList.addTask("")).toThrow(
      "Task text must be a non-empty string!",
    );
    expect(() => todoList.addTask(123)).toThrow(
      "Task text must be a non-empty string!",
    );
  });

  test("Проверка на удаление задачи по её ID", () => {
    todoList.addTask("Task 1");

    const task2 = todoList.addTask("Task 2");
    const removedTask = todoList.removeTask(task2.id);

    expect(removedTask).toEqual(task2);
    expect(todoList.getTasks().length).toBe(1);
  });

  test("Проверка на ошибку, если задача не найдена", () => {
    expect(() => todoList.removeTask(999)).toThrow("Task not found!");
  });

  test("Проверка на фильтрацию задач по статусу", () => {
    todoList.addTask("Task 1");
    todoList.addTask("Task 2");
    todoList.toggleTask(1);

    expect(todoList.getTasks("all").length).toBe(2);
    expect(todoList.getTasks("active").length).toBe(1);
    expect(todoList.getTasks("completed").length).toBe(1);
  });
});
