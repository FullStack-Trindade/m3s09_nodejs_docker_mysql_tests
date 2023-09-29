const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({
    welcome: "Hello World",
    name: "Robert Santos",
  });
});

server.post("/users", (req, res) => {
  const { body } = req;

  !body?.name || !body?.email
    ? res
        .status(400)
        .json({ message: "Dados do usuário devem ser preenchidos" })
    : res.json({ ...body, id: 1 });
});

module.exports = {
  server,
};
