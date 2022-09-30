const { Router } = require("express");

const tasksRouter = Router();
const tasksController = require("../controllers/tasksControllers")
const tasksMiddleware = require("../middlewares/tasksMiddleware")

tasksRouter.get("/", tasksController.getAll)
tasksRouter.post("/", tasksMiddleware.titleValidate, tasksController.createTask)
tasksRouter.delete("/:id", tasksController.deleteTask)
tasksRouter.put("/:id", tasksMiddleware.titleValidate, tasksMiddleware.statusValidate, tasksController.updateTask)

module.exports = tasksRouter;