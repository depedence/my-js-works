const { applyDiscount } = require("./discountService");

describe("{ applyDiscount }", () => {
  const cart = [
    {
      name: "A",
      price: 100,
      quantity: 2,
    },

    {
      name: "B",
      price: 150,
      quantity: 1,
    },
  ];

  test("применяет скидку 10%", async () => {
    const mockFetchDiscount = jest.fn().mockResolvedValue(10); // скидка 10%

    const total = await applyDiscount(cart, mockFetchDiscount, "user123");

    expect(mockFetchDiscount).toHaveBeenCalledWith("user123");
    expect(total).toBe(315);
  });

  test("применяет скидку 0%", async () => {
    const mockFetchDiscount = jest.fn().mockResolvedValue(0); // скидка 0%

    const total = await applyDiscount(cart, mockFetchDiscount, "user456");

    expect(total).toBe(350);
  });

  test("применяет большую скидку", async () => {
    const mockFetchDiscount = jest.fn().mockResolvedValue(50); // скидка 50%

    const total = await applyDiscount(cart, mockFetchDiscount, "user123");

    expect(mockFetchDiscount).toHaveBeenCalledWith("user123");
    expect(total).toBe(175);
  });
});
