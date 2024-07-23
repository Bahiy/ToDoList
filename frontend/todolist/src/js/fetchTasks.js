const FetchTasks = async () => {
	const response = await fetch("http://localhost:3333/tasks");
	const tasks = await response.json();
	return tasks;
};

export default FetchTasks
