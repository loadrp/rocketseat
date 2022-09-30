const tasksModel = require("../models/taskModel");


const getAll = async (request,response) => {
  const tasks = await tasksModel.getAll();
  response.status(200).json(tasks);
};

const createTask = async (request, response) => {
  const createdTask = await tasksModel.createTask(request.body);
  return response.status(201).json(createdTask);
}

const deleteTask = async (request, response) => {
  const { id } = request.params;
  await tasksModel.deleteTask(id);
  return response.status(200).json("Item referente ao id foi deletado")
}

const updateTask = async(request, response) => {
  const { id } = request.params;
  await tasksModel.updateTask(id, request.body);
  return response.status(200).json("Tarefa atualizada")
}

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};