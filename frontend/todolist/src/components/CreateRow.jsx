import { useState, useEffect } from "react";
import FetchTasks from "../js/fetchTasks";

const CreateRow = () => {
	const style = "px-4 py-2 border-solid border text-center";

	// Armazena as Tasks que foram retornadas do banco de dados
	const [tasks, setTasks] = useState([]);

	const getTasks = async () => {
		try {
			const data = await FetchTasks();
			setTasks(data);
		} catch (error) {
			console.log("Error on fetching tasks:", error);
		}
	};

	const deleteTask = async (task) => {
		try {
			await fetch(`http://localhost:3333/tasks/${task.id}`, {
				method: 'DELETE',
				headers: { "Content-Type": "application/json" },
			})
		} catch (error) {
			console.log('Error on DELETE task: ', error);
		}

	}
	
	// Responsável por chamar a função 'GetTasks' assim que o componente CreateRow aparecer na tela
	useEffect(() => {
		getTasks();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<tbody>
			{tasks.map((task) => (
				<tr key={task.id}>
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
							onClick={()=>{deleteTask(task)}}
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
