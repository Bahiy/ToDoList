import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FetchTasks from "../js/fetchTasks";

const TasksRows = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// Armazena as Tasks que foram retornadas do banco de dados
	const [tasks, setTasks] = useState([]);

	const style = "px-4 py-2 border-solid border text-center";

	const onSubmit = async (data) => {
		try {
			await fetch("http://localhost:3333/tasks", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			getTasks();
			reset();
			console.log("Post request sucessfull");
		} catch (error) {
			console.log("Error on POST task:", error);
		}
	};

	const handleStatusChange = async (id, newStatus) => {
		try {
			await fetch(`http://localhost:3333/tasks/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ status: newStatus }),
			});
			const updatedTasks = tasks.map((task) =>
				task.id === id ? { ...task, status: newStatus } : task
			);
			setTasks(updatedTasks);
		} catch (error) {
			console.log("Error on PATCH task:", error);
		}
	};

	const getTasks = async () => {
		try {
			const data = await FetchTasks();
			setTasks(data);
		} catch (error) {
			console.log("Error on fetching tasks:", error);
		}
	};

	const deleteTask = async (id) => {
		try {
			await fetch(`http://localhost:3333/tasks/${id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});
			const updateTasks = tasks.filter((taskF) => taskF.id !== id);
			setTasks(updateTasks);
		} catch (error) {
			console.log("Error on DELETE task: ", error);
		}
	};

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex mb-12 gap-4 w-full"
			>
				<input
					className="w-full p-4 text-md flex-1 rounded-md border-solid border border-gray-400"
					placeholder="Adicionar Tarefa"
					type="text"
					{...register("title", { required: true })}
				/>
				<button
					className="bg-blue-500 h-14 w-14 font-light cursor-pointer text-3xl  text-white flex items-center justify-center rounded-md "
					type="submit"
				>
					+
				</button>
				{errors.title && (
					<span className="text-red-400 font-bold">This field is required</span>
				)}
			</form>

			<table className="border-collapse w-full">
				<thead>
					<tr>
						<th className={style}>Tarefa</th>
						<th className={style}>Criada em</th>
						<th className={style}>Status</th>
						<th className={style}>Ações</th>
					</tr>
				</thead>

				<tbody>
					{tasks.map((task) => (
						<tr key={task.id}>
							<td className={style}>{task.title}</td>
							<td className={style}>{task.created_at}</td>
							<td className={style}>
								<select
									className="hover:bg-neutral-300 w-full p-3 text-md capitalize rounded-xl bg-neutral-200"
									value={task.status}
									onChange={(e) => handleStatusChange(task.id, e.target.value)}
									disabled
								>
									<option value="pendente">Pendente</option>
									<option value="em andamento">Em andamento</option>
									<option value="finalizada">Finalizada</option>
								</select>
							</td>
							<td className={style}>
								<button className="rounded-md p-2 text-neutral-100 inline-flex items-center justify-center cursor-pointer m-1 bg-orange-400">
									<span className="material-symbols-outlined">edit</span>
								</button>
								<button
									onClick={() => {
										deleteTask(task.id);
									}}
									className="rounded-md p-2 text-neutral-100 inline-flex items-center justify-center cursor-pointer m-1 bg-red-600"
								>
									<span className="material-symbols-outlined">delete</span>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TasksRows;
