const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/", (request, response) => {
  response.send("Você chegou na rota do usuário")
})

module.exports = usersRouter;