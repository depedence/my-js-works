class TaskProcessor {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
    this.log = [];
  }

  processTasks(taskQueue) {
    taskQueue.forEach((task) => {
      try {
        this._processTask(task);
        task.status = "success";
        this.log.push(`Task ${task.id} succeeded`);
      } catch (error) {
        task.status = "failed";
        this.log.push(`Task ${task.id} failed: ${error.message}`);
      }
    });
  }

  _processTask(task) {
    if (task.status !== "pending") {
      throw new Error("Invalid task status");
    }

    if (typeof task.amount !== "number" || task.amount <= 0) {
      throw new Error("Invalid amount");
    }

    switch (task.type) {
      case "credit":
        this.balance += task.amount;
        break;

      case "debit":
        if (this.balance < task.amount) {
          throw new Error("Insufficient funds");
        }
        this.balance -= task.amount;
        break;

      default:
        throw new Error("Unknown task type");
    }
  }

  getBalance() {
    return this.balance;
  }

  getLog() {
    return this.log;
  }
}

module.exports = { TaskProcessor };
