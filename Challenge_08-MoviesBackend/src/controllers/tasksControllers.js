const tasksModel = require("../models/taskModel");


const getAll = async (request,response) => {
  const tasks = await tasksModel.getAll();
  response.status(200).json(tasks);
};

const createTask = async (request, response) => {
  const createdTask = await tasksModel.createTask(request.body);
  return response.status(201).json(createdTask);
}

module.exports = {
  getAll,
  createTask
};