class DateHelper {
  // Форматировать дату (пример: 'DD/MM/YYYY')
  formatDate(date, format = "DD/MM/YYYY") {
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error("Invalid date!");
    }

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return format.replace("DD", day).replace("MM", month).replace("YYYY", year);
  }

  // Разница между датами (в днях/месяцах/годах)
  getDateDiff(startDate, endDate, unit = "days") {
    if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
      throw new Error("Both arguments must be Date objects!");
    }

    const diffMs = endDate - startDate;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    switch (unit) {
      case "months":
        return Math.floor(diffDays / 30);
      case "years":
        return Math.floor(diffDays / 365);
      default:
        return diffDays;
    }
  }

  // Проверить, високосный ли год
  isLeapYear(year) {
    if (typeof year !== "number") {
      throw new Error("Year must be a number!");
    }
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // Добавить или вычесть дни от даты
  addDays(date, days) {
    if (!(date instanceof Date)) {
      throw new Error("Invalid date!");
    }
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

  // Получить день недели (например, "Понедельник")
  getDayOfWeek(date, locale = "ru-RU") {
    if (!(date instanceof Date)) {
      throw new Error("Invalid date!");
    }
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
}

module.exports = DateHelper;
