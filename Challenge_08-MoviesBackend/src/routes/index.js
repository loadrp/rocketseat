const { Router } = require("express");
const routes = Router();


const usersRouter = require("./users.routes");
const tasksRouter = require("./tasks.routes");


routes.use("/users",  usersRouter)
routes.use("/tasks",  tasksRouter)

module.exports = routes;
