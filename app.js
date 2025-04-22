//connect express

const express = require("express");

//create app object

const app = express();

//create parser for application/x-www-form-urlencoded

const urlencodedParser = express.urlencoded({ extended: false });

//defining a route handler "/"

app.get("/", function (_, response) {
  response.sendFile(__dirname + "/public/index.html");
});

app.post("/", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);

  console.log(request.body);

  response.send(`${request.body.username} - ${request.body.userAge}`);
});

app.get("/about/:aboutId", function (request, response) {
  response.send("aboutId: " + request.params["aboutId"]);
});

app.use("/error", function (_, response) {
  response.sendStatus(404);
});

app.use("/author", function (_, response) {
  response.redirect("https://github.com/qwemptyness");
});

app.use("/info", function (request, response) {
  const id = request.query.id;
  const userName = request.query.name;
  response.send(`<h2>Информация</h2> <p>id : ${id}</p> name : ${userName}`);
});

//////////////////////////////////////   API   ///////////////////////////////////////////////////////////////////////

app.use(express.json());

app.use(express.static("public"));

// simple data base

const users = [];
let id = 1;

function findUserIndexById(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) return i;
  }
  return -1;
}

app.get("/api/users", function (_, response) {
  response.send(users);
});

// get user by Id

app.get("/api/users/:id", function (request, response) {
  const id = request.params.id; //get id
  const index = findUserIndexById(id);

  if (index > -1) {
    response.send(users[index]);
  } else {
    response.status(404).send("User not found");
  }
});

app.post("/api/users", function (request, response) {
  if (!request.body) return response.sendStatus(400);

  const userName = request.body.name;
  const userAge = request.body.age;
  const user = {
    name: userName,
    age: userAge,
  };

  user.id = id++;
  users.push(user);
  response.send(user);
});

app.delete("/api/users/:id", function (request, response) {
  const id = request.params.id;
  const index = findUserIndexById(id);

  if (index > -1) {
    const user = users.splice(index, 1)[0];
    response.send(user);
  } else {
    response.status(404).send("User not found");
  }
});

app.put("/ap/users", function (request, response) {
  if (!request.body) return response.sendStatus(400);

  const id = request.body.id;
  const userName = request.body.name;
  const userAge = request.body.age;

  const index = findUserIndexById(id);
  if (index > -1) {
    // change user data

    const user = users[index];
    user.age = userAge;
    user.name = userName;

    response.send(user);
  } else {
    response.status(404).send("User not found");
  }
});

app.listen(3003, () => {
  console.log("Server starting on localhost:3003");
});
