const { verifyPromoCodeWithRetry } = require("./retryPromoVerifier");

describe("{ verifyPromoCodeWithRetry }", () => {
  test("успешно с первой попытки", async () => {
    const mockCheckPromo = jest
      .fn()
      .mockResolvedValue({ valid: true, discount: 20 });

    const discount = await verifyPromoCodeWithRetry(
      "SAVE20",
      mockCheckPromo,
      3,
    );

    expect(discount).toBe(20);
    expect(mockCheckPromo).toHaveBeenCalledTimes(1);
    expect(mockCheckPromo).toHaveBeenCalledWith("SAVE20");
  });

  test("промокод невалидный - ошибка", async () => {
    const mockCheckPromo = jest.fn().mockResolvedValue({ valid: false });

    await expect(
      verifyPromoCodeWithRetry("SAVE10", mockCheckPromo, 3).rejects.toThrow(
        "Invalid promo code",
      ),
    );
  });

  test("успешно со второй попытки после сбоя", async () => {
    const mockCheckPromo = jest
      .fn()
      .mockRejectedOnce(new Error("Network error"))
      .mockResolvedValue({ valid: true, discount: 10 });

    const discount = await verifyPromoCodeWithRetry(
      "SAVE10",
      mockCheckPromo,
      3,
    );

    expect(discount).toBe(10);
    expect(mockCheckPromo).toHaveBeenCalledTimes(2);
  });

  test("все попытки завершаются ошибкой", async () => {
    const mockCheckPromo = jest.fn().mockRejectedError(new Error("ERROR"));

    await expect(
      verifyPromoCodeWithRetry("SAVE10", mockCheckPromo, 3),
    ).rejects.toThrow("Failed to verify promo code");
  });
});
