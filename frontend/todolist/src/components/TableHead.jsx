const TableHead = () => {
	const tdth = "px-4 py-2 border-solid border text-center";

	return (
		<thead>
			<tr>
				<th className={tdth}>Tarefa</th>
				<th className={tdth}>Criada em</th>
				<th className={tdth}>Status</th>
				<th className={tdth}>Ações</th>
			</tr>
		</thead>
	);
};

export default TableHead;
