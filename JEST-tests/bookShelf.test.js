const BookShelf = require("./bookShelf");

describe("Тестировние BookShelf", () => {
  let bookshelf;

  beforeEach(() => {
    bookshelf = new BookShelf();
  });

  test("Проверка на добавление книги", () => {
    const book = bookshelf.addBook("Капитанская дочка", "Пушкин");
    expect(book).toEqual({
      id: 1,
      title: "Капитанская дочка",
      author: "Пушкин",
      isRead: false,
    });
    expect(bookshelf.getBooks().length).toBe(1);
  });

  test("Проверка на ошибку, если текст не валиден", () => {
    expect(() => bookshelf.addBook("")).toThrow(
      "Title and author must be non-empty strings!",
    );
    expect(() => bookshelf.addBook(123)).toThrow(
      "Title and author must be non-empty strings!",
    );
  });

  test("Проверка на удаление книги по её id", () => {
    bookshelf.addBook("Book 1", "Author");

    const book2 = bookshelf.addBook("Book 2", "Author");
    const removedBook = bookshelf.removeBook(book2.id);

    expect(removedBook).toEqual(book2);
    expect(bookshelf.getBooks().length).toBe(1);
  });

  test("Проверка на ошибку, если книга не найдена", () => {
    expect(() => bookshelf.removeBook(9999)).toThrow("Book not found!");
  });

  test("Проверка на фильтрацию книг по статусу", () => {
    bookshelf.addBook("Book 1", "Author");
    bookshelf.addBook("Book 2", "Author");
    bookshelf.toggleReadStatus(1);

    expect(bookshelf.getBooks("all").length).toBe(2);
    expect(bookshelf.getBooks("read").length).toBe(1);
    expect(bookshelf.getBooks("unread").length).toBe(1);
  });
});
