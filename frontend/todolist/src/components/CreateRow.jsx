const CreateRow = (task) => {
    const { title, created_at, status } = task;
    

	const style = "px-4 py-2 border-solid border text-center";

	return (
		<tbody>
			<tr>
				<td className={style}>{title}</td>
				<td className={style}>{created_at}</td>
				<td className={style}>
					<select
						className="hover:bg-neutral-300 w-full p-3 text-md capitalize rounded-xl bg-neutral-200"
						name=""
						value={status}
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
					<button className="rounded-md p-2 text-neutral-100 inline-flex items-center justify-center cursor-pointer m-1 bg-red-600">
						<span className="material-symbols-outlined">delete</span>
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default CreateRow;
