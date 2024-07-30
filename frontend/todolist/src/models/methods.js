


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

export default {
    onSubmit,

}