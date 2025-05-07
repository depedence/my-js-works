const { EmailSender } = require("./emailSender");

describe("Email Sender", () => {
  test("Выполняется с первой попытки", async () => {
    const sendMock = jest.fn(() => Promise.resolve("done"));
    const sender = new EmailSender(sendMock);

    await sender.sendWithRetry("user@example.com");

    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(sender.getLogs()).toContain("Success: user@example.com");
  });

  test("Выполняется со второй попытки", async () => {
    let attempt = 0;

    const sendMock = jest.fn(() => {
      attempt++;

      if (attempt < 2) {
        return Promise.reject(new Error("error"));
      } else {
        return Promise.resolve("second done");
      }
    });

    const sender = new EmailSender(sendMock);

    await sender.sendWithRetry("user@example.com");

    expect(sendMock).toHaveBeenCalledTimes(2);
    expect(sender.getLogs()).toContain("Success: user@example.com");
  });

  test("Неудачная отправка после всех попыток", async () => {
    const sendMock = jest.fn(() => Promise.reject(new Error("fail")));
    const sender = new EmailSender(sendMock);

    await sender.sendWithRetry("user@example.com", 3);

    expect(sendMock).toHaveBeenCalledTimes(3);
    expect(sender.getLogs()).toContain(
      "Failed after 3 attempts: user@example.com",
    );
  });
});
