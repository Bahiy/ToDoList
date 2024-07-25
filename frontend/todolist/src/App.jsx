import "./app.css";
import CreateRow from "./components/CreateRow";
import FormTask from "./components/FormTask";
import TableHead from "./components/TableHead";

function App() {

	return (
		<main className="">
			<FormTask />
			<table className="border-collapse w-full">
				<TableHead/>
				<CreateRow />
			</table>
		</main>
	);
}

export default App;
