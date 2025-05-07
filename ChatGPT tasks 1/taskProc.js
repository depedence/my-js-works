// Утилита: задержка на N миллисекунд
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class TaskProcessor {
  constructor(delayBetweenTasks = 100) {
    this.tasks = []; // массив { id, action }
    this.logs = [];
    this.delayBetweenTasks = delayBetweenTasks;
  }

  addTask(id, action) {
    this.tasks.push({ id, action });
  }

  async run() {
    for (const { id, action } of this.tasks) {
      try {
        await action();
        this.logs.push(`Task ${id} succeeded`);
      } catch (err) {
        this.logs.push(`Task ${id} failed`);
      }

      await delay(this.delayBetweenTasks);
    }
  }

  getLogs() {
    return this.logs;
  }
}

module.exports = { TaskProcessor };
