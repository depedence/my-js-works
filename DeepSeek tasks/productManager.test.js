const ProductManager = require("./productManager");

describe("Прогон менеджера продуктов", () => {
  let productmanager;

  beforeEach(() => {
    productmanager = new ProductManager();
  });

  test("Проверка на добавление продукта", () => {
    const product = productmanager.addProduct("milk", 228, 21);

    expect(product).toEqual({
      id: 1,
      name: "milk",
      price: 228,
      quantity: 21,
      inStock: true,
    });

    expect(productmanager.getProducts().length).toBe(1);
  });

  test("Проверка на ошибку в валидации", () => {
    expect(() => productmanager.addProduct("")).toThrow(
      "Product name must be a non-empty string!",
    );

    expect(() => productmanager.addProduct(123)).toThrow(
      "Product name must be a non-empty string!",
    );
  });

  test("Проверка на удаление продукта", () => {
    productmanager.addProduct("product 1", 228, 21);

    const product2 = productmanager.addProduct("product 2", 337, 18);
    const removedProduct = productmanager.removeProduct(product2.id);

    expect(removedProduct).toEqual(product2);
    expect(productmanager.getProducts().length).toBe(1);
  });

  test("Проверка на удаление, если продукт не найден", () => {
    expect(() => productmanager.removeProduct(999)).toThrow(
      "Product not found!",
    );
  });

  test("Проверка на обновление цены продукта", () => {
    const productLow = productmanager.addProduct("milk", 1, 1);
    expect(productLow).toEqual({
      id: 1,
      name: "milk",
      price: 1,
      quantity: 1,
      inStock: true,
    });

    const productNew = productmanager.updateProduct(1, 100, 50);
    expect(productNew).toEqual({
      id: 1,
      name: "milk",
      price: 100,
      quantity: 50,
      inStock: true,
    });
  });

  test("Проверка на ошибку при обновлении цены продукта", () => {
    expect(() => productmanager.updateProduct(999, 100, 50)).toThrow(
      "Product not found!",
    );
  });

  test("Проверка на фильтрацию", () => {
    productmanager.addProduct("milkOut", 100, 0);
    productmanager.addProduct("milkIn", 100, 50);

    expect(productmanager.getProducts("all").length).toBe(2);
    expect(productmanager.getProducts("inStock").length).toBe(1);
    expect(productmanager.getProducts("outOfStock").length).toBe(1);
  });

  test("Проверка на подсчёт общей стоимости склада", () => {
    productmanager.addProduct("milk", 100, 2);
    productmanager.addProduct("potato", 150, 1);

    expect(productmanager.getTotalInventoryValue()).toBe(350);
  });
});
