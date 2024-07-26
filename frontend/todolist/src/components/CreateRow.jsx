import { useState, useEffect } from "react";
import FetchTasks from "../js/fetchTasks";

const CreateRow = () => {
	const style = "px-4 py-2 border-solid border text-center";

	// Armazena as Tasks que foram retornadas do banco de dados
	const [tasks, setTasks] = useState([]);
	
// Função armazena as Tasks no Estado React
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
				method: 'DELETE',
				headers: { "Content-Type": "application/json" },
			})
			const updateTasks = tasks.filter((taskF) => taskF.id !== id)
			setTasks(updateTasks)
		} catch (error) {
			console.log('Error on DELETE task: ', error);
		}

	}
	
	useEffect(() => {
		getTasks();
	}, []);

	return (
		<tbody>
			{tasks.map((task,i) => (
				<tr key={i}>
					<td className={style}>{task.title}</td>
					<td className={style}>{task.created_at}</td>
					<td className={style}>
						<select
							className="hover:bg-neutral-300 w-full p-3 text-md capitalize rounded-xl bg-neutral-200"
							name=""
							value={task.status}
							id=""
						>
							<option value="pendente">Pendente</option>
							<option value="em andamento">Em andamento</option>
							<option value="finalizada">Finalizado</option>
						</select>
					</td>
					<td className={style}>
						<button className="rounded-md p-2 text-neutral-100 inline-flex items-center justify-center cursor-pointer m-1 bg-orange-400">
							<span className="material-symbols-outlined">edit</span>
						</button>
						<button
							onClick={()=>{deleteTask(task.id)}}
							className="rounded-md p-2 text-neutral-100 inline-flex items-center justify-center cursor-pointer m-1 bg-red-600"
						>
							<span className="material-symbols-outlined">delete</span>
						</button>
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default CreateRow;
