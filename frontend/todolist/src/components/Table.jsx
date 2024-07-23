const TableBody = () => {
	const tdth = "px-4 py-2 border-solid border text-center";
	return (
		<tbody>
			<tr>
				<td className={tdth}>Título da TASK</td>
				<td className={tdth}>21 de Julho de 2024 15h00</td>
				<td className={tdth}>
					<select
						className="hover:bg-neutral-300 w-full p-3 text-md capitalize rounded-xl bg-neutral-200"
						name=""
						id=""
					>
						<option value="Pendente">Pendente</option>
						<option value="Em andamento">Em andamento</option>
						<option value="Finalizada">Finalizado</option>
					</select>
				</td>
				<td className={tdth}>
					<button className="rounded-sm p-1 text-neutral-100 inline-flex items-center justify-center cursor-pointer mx-1 bg-orange-400">
						<span className="material-symbols-outlined">edit</span>
					</button>
					<button className="rounded-sm p-1 text-neutral-100 inline-flex items-center justify-center cursor-pointer mx-1 bg-red-600">
						<span className="material-symbols-outlined">delete</span>
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default TableBody;
