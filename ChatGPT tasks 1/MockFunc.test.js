const { retryAction } = require("./MockFunc");

describe("Пример использования моков и async/await", () => {
  test("Выполняется с первой попытки", async () => {
    // Мокаем функцию, которая сразу работает
    const mockAction = jest.fn(() => Promise.resolve("Успех"));

    const result = await retryAction(mockAction, 3);

    expect(result).toBe("Успех");
    expect(mockAction).toHaveBeenCalledTimes(1); // Вызвалась 1 раз
  });

  test("Выполняется со второй попытки", async () => {
    let attempt = 0;

    const mockAction = jest.fn(() => {
      attempt++;
      if (attempt < 2) {
        return Promise.reject(new Error("Временная ошибка"));
      } else {
        return Promise.resolve("Второй успех");
      }
    });

    const result = await retryAction(mockAction, 3);

    expect(result).toBe("Второй успех");
    expect(mockAction).toHaveBeenCalledTimes(2);
  });

  test("Бросает ошибку после всех неудач", async () => {
    const mockAction = jest.fn(() => Promise.reject(new Error("Всё плохо")));

    await expect(retryAction(mockAction, 3)).rejects.toThrow(
      "All retries failed",
    );
    expect(mockAction).toHaveBeenCalledTimes(3);
  });
});
