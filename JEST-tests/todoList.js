class TodoList {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  // Добавить задачу
  addTask(text) {
    if (!text || typeof text !== "string") {
      throw new Error("Task text must be a non-empty string!");
    }
    const task = { id: this.nextId++, text, completed: false };
    this.tasks.push(task);
    return task;
  }

  // Удалить задачу по ID
  removeTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      throw new Error("Task not found!");
    }
    return this.tasks.splice(index, 1)[0];
  }

  // Переключить статус задачи (выполнено/не выполнено)
  toggleTask(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error("Task not found!");
    }
    task.completed = !task.completed;
    return task;
  }

  // Получить задачи по статусу (all, active, completed)
  getTasks(filter = "all") {
    switch (filter) {
      case "active":
        return this.tasks.filter((task) => !task.completed);
      case "completed":
        return this.tasks.filter((task) => task.completed);
      default:
        return [...this.tasks];
    }
  }

  // Проверить, есть ли задача с таким текстом
  hasTask(text) {
    return this.tasks.some((task) => task.text === text);
  }
}

module.exports = TodoList;
