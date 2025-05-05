document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault;

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      // Перенаправление после успешного входа
      // window.location.href = '/dashboard.html'
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Ошибка", error);
    alert("Произошла ошибка при входе");
  }
});

document
  .querySelector(".btn-register")
  .addEventListener("click", async function (e) {
    e.preventDefault();

    const username = prompt("Введите логин");
    if (!username) return;

    const password = prompt("Введите пароль");
    if (!password) return;

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Ошибка: ", error);
      alert("Ошибка при регистрации");
    }
  });
