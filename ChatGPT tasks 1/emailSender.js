class EmailSender {
  constructor(sendFunction) {
    this.sendFunction = sendFunction; // внешняя зависимость (мокаем)
    this.logs = [];
  }

  async sendWithRetry(email, maxRetries = 3) {
    let attempts = 0;

    while (attempts < maxRetries) {
      try {
        await this.sendFunction(email);
        this.logs.push(`Success: ${email}`);
        return;
      } catch (err) {
        attempts++;
      }
    }

    this.logs.push(`Failed after ${maxRetries} attempts: ${email}`);
  }

  getLogs() {
    return this.logs;
  }
}

module.exports = { EmailSender };
