class BookShelf {
  constructor() {
    this.books = [];
    this.nextId = 1;
  }

  // Добавить книгу
  addBook(title, author) {
    if (
      !title ||
      !author ||
      typeof title !== "string" ||
      typeof author !== "string"
    ) {
      throw new Error("Title and author must be non-empty strings!");
    }
    const book = { id: this.nextId++, title, author, isRead: false };
    this.books.push(book);
    return book;
  }

  // Удалить книгу по ID
  removeBook(id) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) {
      throw new Error("Book not found!");
    }
    return this.books.splice(index, 1)[0];
  }

  // Отметить книгу как прочитанную/непрочитанную
  toggleReadStatus(id) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new Error("Book not found!");
    }
    book.isRead = !book.isRead;
    return book;
  }

  // Получить книги по статусу (all, read, unread)
  getBooks(filter = "all") {
    switch (filter) {
      case "read":
        return this.books.filter((book) => book.isRead);
      case "unread":
        return this.books.filter((book) => !book.isRead);
      default:
        return [...this.books];
    }
  }

  // Найти книги по названию (точное совпадение)
  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }
}

module.exports = BookShelf;
