const { processOrder } = require("./orderProcessor");

describe("{ processOrder }", () => {
  test("возвращает итоговую сумму заказка", () => {
    const cart = [
      {
        name: "item1",
        price: 100,
        quantity: 1,
      },

      {
        name: "item2",
        price: 50,
        quantity: 2,
      },
    ];

    const mockNotify = jest.fn();

    const total = processOrder(cart, mockNotify);

    expect(total).toBe(200);
    expect(mockNotify).not.toHaveBeenCalled();
  });

  test("вызывает notify при сумме заказа > 500", () => {
    const cart = [
      {
        name: "item1",
        price: 250,
        quantity: 1,
      },

      {
        name: "item2",
        price: 500,
        quantity: 1,
      },
    ];

    const mockNotify = jest.fn();

    const total = processOrder(cart, mockNotify);

    expect(total).toBe(750);
    expect(mockNotify).toHaveBeenCalledTimes(1);
    expect(mockNotify).toHaveBeenCalledWith("Large order");
  });
});
