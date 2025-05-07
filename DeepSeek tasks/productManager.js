class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  // Добавить продукт
  addProduct(name, price, quantity) {
    if (!name || typeof name !== "string") {
      throw new Error("Product name must be a non-empty string!");
    }
    if (
      price <= 0 ||
      quantity < 0 ||
      typeof price !== "number" ||
      typeof quantity !== "number"
    ) {
      throw new Error("Price and quantity must be positive numbers!");
    }
    const product = {
      id: this.nextId++,
      name,
      price,
      quantity,
      inStock: quantity > 0,
    };
    this.products.push(product);
    return product;
  }

  // Удалить продукт по ID
  removeProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error("Product not found!");
    }
    return this.products.splice(index, 1)[0];
  }

  // Обновить цену или количество
  updateProduct(id, newPrice, newQuantity) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error("Product not found!");
    }
    if (newPrice !== undefined) {
      if (newPrice <= 0 || typeof newPrice !== "number") {
        throw new Error("Price must be a positive number!");
      }
      product.price = newPrice;
    }
    if (newQuantity !== undefined) {
      if (newQuantity < 0 || typeof newQuantity !== "number") {
        throw new Error("Quantity must be a non-negative number!");
      }
      product.quantity = newQuantity;
      product.inStock = newQuantity > 0;
    }
    return product;
  }

  // Получить продукты по наличию (all, inStock, outOfStock)
  getProducts(filter = "all") {
    switch (filter) {
      case "inStock":
        return this.products.filter((p) => p.inStock);
      case "outOfStock":
        return this.products.filter((p) => !p.inStock);
      default:
        return [...this.products];
    }
  }

  // Найти продукты по названию (регистронезависимо)
  searchProducts(name) {
    return this.products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  // Общая стоимость всех продуктов на складе
  getTotalInventoryValue() {
    return this.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }
}

module.exports = ProductManager;
