const { Router } = require("express");

const UserController = require("../controllers/UserController")
const usersRoutes = Router();
const usersController = new UserController()

function myMiddleware(request,response,next) {

  next();  
}

usersRoutes.post("/", myMiddleware , usersController.create)
usersRoutes.put("/:id",myMiddleware, usersController.update)

module.exports = usersRoutes;