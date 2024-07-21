const connection = require("./connection");

// Função para retornar todos as tasks
const getAll = async () => {
	// Uma variavel entre chaves siginfica que vamos utulizar a primeira posição desse array
	const [tasks] = await connection.execute("SELECT * FROM tasks");
	return tasks;
};

// Função que vai criar uma nova task no banco de dados
const createTask = async (task) => {
	const { title } = task;
	const dateUTC = new Date(Date.now()).toUTCString();

	const query = "INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)";
	const [createdTask] = await connection.execute(query, [
		title,
		"pendente",
		dateUTC,
	]);
	return createdTask;
};

// Função para deletar uma task
const deleteTask = async (id) => {
	const query = "DELETE FROM tasks WHERE id = ?";
	const removedTask = await connection.execute(query, [id]);
	return removedTask;
};

const updateTask = async (id, task) => {
	const { title, status } = task;

	const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
	const updatedTask = await connection.execute(query, [title, status, id]);
	
	return updatedTask;
};

module.exports = {
	getAll,
	createTask,
	deleteTask,
	updateTask,
};
