const DateHelper = require("./dateHelper");

describe("Прогон календаря", () => {
  let datehelper;

  beforeEach(() => {
    datehelper = new DateHelper();
  });

  test("Проверка на форматирование даты", () => {
    const date = new Date(2023, 0, 15);

    expect(datehelper.formatDate(date)).toEqual("15/01/2023");
    expect(datehelper.formatDate(date, "MM/DD/YYYY")).toBe("01/15/2023");
  });

  test("Проверка валидации даты", () => {
    expect(() => datehelper.formatDate("zxczxczxczxc")).toThrow(
      "Invalid date!",
    );
  });

  test("Проверка разницы между датами (в днях/месяцах/годах)", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2025, 1, 11);

    expect(datehelper.getDateDiff(date1, date2, "days"));
    expect(datehelper.getDateDiff(date1, date2, "months"));
    expect(datehelper.getDateDiff(date1, date2, "years"));
  });

  test("Проверка на валидацию разницы дат", () => {
    expect(() => datehelper.getDateDiff(123)).toThrow(
      "Both arguments must be Date objects!",
    );
  });

  test("Проверка на високосный год", () => {
    expect(datehelper.isLeapYear(2020)).toTrue;
    expect(datehelper.isLeapYear(2021)).toFalse;

    expect(() => datehelper.isLeapYear("2020")).toThrow(
      "Year must be a number!",
    );
  });

  test("Проверка на добавление дней в дату", () => {
    const date = new Date(2023, 0, 1);

    const newdate = datehelper.addDays(date, 7);
    expect(datehelper.formatDate(newdate, "DD/MM/YYYY")).toEqual("08/01/2023");
  });

  test("Проверка на получение дня недели", () => {
    const date = new Date(2023, 0, 1);

    expect(datehelper.getDayOfWeek(date, "ru-RU")).toEqual("воскресенье");
  });
});
