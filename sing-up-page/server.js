const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Подключение к MongoDB
mongoose
  .connect("mongoDB://localhost:27017/auth_demo", {
    userNewUrlParser: true,
    userUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

// Модель пользователя
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  }),
);

// Роуты
app.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Проверка существования пользователя
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Пользователь уже существует" });
    }

    // Хэширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание пользователя
    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Пользователь успешно зарегистрирован" });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Поиск пользователя
    const user = await user.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Неверный логин и пароль" });
    }

    // Проверка пароля
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Неверный логин или пароль" });
    }

    res.json({
      message: "Вход выполнен успешно",
      user: { username: user.username },
    });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер успешно запущен на порту ${PORT}`);
});
