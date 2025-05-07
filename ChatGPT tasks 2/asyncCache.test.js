const { createAsyncCache } = require("./asyncCache");

describe("{ createAsyncCache }", () => {
  test("запрашивает данные при первом вызове", async () => {
    const fetchMock = jest.fn().mockResolvedValue("value1");

    const getData = createAsyncCache(fetchMock);

    const result = await getData("key1");

    expect(result).toBe("value1");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith("key1");
  });

  test("не запрашивает повторно при втором вызове с тем же ключом", async () => {
    const fetchMock = jest.fn().mockResolvedValue("cached");

    const getData = createAsyncCache(fetchMock);

    const the_first = await getData("key1");
    const the_second = await getData("key1");

    expect(the_first).toEqual("cached");
    expect(the_second).toEqual("cached");

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("запрашивает повторно, если при первом вызове произошла ошибка", async () => {
    const fetchMock = jest
      .fn()
      .mockRejectedValueOnce(new Error("fail"))
      .mockResolvedValueOnce("nice");

    const getData = createAsyncCache(fetchMock);

    await expect(getData("errorKey")).rejects.toThrow("fail");

    const result = await getData("errorKey");
    expect(result).toBe("nice");

    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  test("кеширует каждый ключ отдельно", async () => {
    const fetchMock = jest
      .fn()
      .mockImplementation((key) => Promise.resolve(`value-for-${key}`));

    const getData = createAsyncCache(fetchMock);

    const a = await getData("a");
    const b = await getData("b");

    expect(a).toBe("value-for-a");
    expect(b).toBe("value-for-b");

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock).toHaveBeenCalledWith("a");
    expect(fetchMock).toHaveBeenCalledWith("b");
  });
});
