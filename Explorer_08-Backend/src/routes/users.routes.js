const { Router } = require("express");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const UserController = require("../controllers/UserController")

const usersRoutes = Router();
const usersController = new UserController()


usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated , usersController.update)

module.exports = usersRoutes;