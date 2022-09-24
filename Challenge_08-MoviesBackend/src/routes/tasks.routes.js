const { Router } = require("express");

const tasksRouter = Router();
const tasksController = require("../controllers/tasksControllers")
const tasksMiddleware = require("../middlewares/tasksMiddleware")

tasksRouter.get("/", tasksController.getAll)
tasksRouter.post("/", tasksMiddleware.bodyValidate, tasksController.createTask)

module.exports = tasksRouter;