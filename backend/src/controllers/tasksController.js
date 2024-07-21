const tasksModels = require("../models/tasksModel");

const getAll = async (_request, response) => {
	const tasks = await tasksModels.getAll();

	return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
	const newTask = await tasksModels.createTask(request.body);
	return response.status(201).json(newTask);
};

const deleteTask = async (request, response) => {
	const { id } = request.params;

	await tasksModels.deleteTask(id);
	return response.status(204).json();
};
const updateTask = async (request, response) => {
	const { id } = request.params;

	await tasksModels.updateTask(id, request.body);
	return response.status(204).json();
};

module.exports = {
	getAll,
	createTask,
	deleteTask,
	updateTask,
};
