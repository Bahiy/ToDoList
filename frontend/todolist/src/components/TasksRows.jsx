import { useEffect, useState } from "react";
import api from "../js/api";
import FormTable from "./FormTable";

const TasksRows = () => {
  // Armazena as Tasks que foram retornadas do banco de dados
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");
  const [editTaskStatus, setEditTaskStatus] = useState("");

  const style = "px-4 py-2 mborder-solid border text-center";

  const getTasks = async () => {
    try {
      const data = (await api.get()).data;
      console.log(data);
      
      setTasks(data);
    } catch (error) {
      console.log("Error on fetching tasks:", error);
    }
  };

  const putTask = async (id, newStatus) => {
    try {
      await api.put(`/${id}`);
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.log("Error on PUT task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/${id}`);
      const updatedTasks = tasks.filter((taskF) => taskF.id !== id);
      setTasks(updatedTasks);
      console.log("Successful on DELETE task: ", id);
    } catch (error) {
      console.log("Error on DELETE task: ", id, error);
    }
  };

  const handleSaveClick = async (id) => {
    try {
      await api.put(`/${id}`, {
        title: editTaskTitle,
        status: editTaskStatus,
      });
      setEditTaskId(null);
      setEditTaskTitle("");
      setEditTaskStatus("");
      getTasks();
      console.log("Successful on PUT Task", id);
    } catch (error) {
      console.log("Error on updating task:", error);
    }
  };

  const handleEditClick = (task) => {
    setEditTaskId(task.id);
    setEditTaskTitle(task.title);
    setEditTaskStatus(task.status);
    console.log(task.id);
  };

  const handleVoiceClick = (textToSpeech) => {
    if (textToSpeech) {
      const voicesList = window.speechSynthesis.getVoices();
      const ut = new SpeechSynthesisUtterance(textToSpeech);
      console.log(voicesList);

      ut.voice = voicesList[16];
      window.speechSynthesis.speak(ut);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <FormTable getTasks={getTasks} />
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
              <td className="px-4 py-5 margin border text-center flex justify-between items-center">
                {editTaskId === task.id ? (
                  <input
                    type="text"
                    value={editTaskTitle}
                    onChange={(e) => setEditTaskTitle(e.target.value)}
                    className="w-full p-2 border-solid border rounded-md"
                  />
                ) : (
                  task.title
                )}
                <button
                  id="speech"
                  onClick={() => {
                    handleVoiceClick(task.title);
                  }}
                  className="material-symbols-outlined text-base"
                >
                  volume_up
                </button>
              </td>
              <td className={style}>{task.created_at}</td>
              <td className={style}>
                {editTaskId === task.id ? (
                  <select
                    className="hover:bg-neutral-300 w-full p-3 text-md capitalize rounded-xl bg-neutral-200"
                    value={editTaskStatus}
                    onChange={(e) => setEditTaskStatus(e.target.value)}
                  >
                    <option value="pendente">Pendente</option>
                    <option value="em andamento">Em andamento</option>
                    <option value="finalizada">Finalizada</option>
                  </select>
                ) : (
                  <select
                    className="hover:bg-neutral-300 w-full p-3 text-md capitalize rounded-xl bg-neutral-200"
                    value={task.status}
                    onChange={(e) => putTask(task.id, e.target.value)}
                    disabled
                  >
                    <option value="pendente">Pendente</option>
                    <option value="em andamento">Em andamento</option>
                    <option value="finalizada">Finalizada</option>
                  </select>
                )}
              </td>
              <td className={style}>
                {editTaskId === task.id ? (
                  <button
                    onClick={() => handleSaveClick(task.id)}
                    className="rounded-md p-2 text-neutral-100 inline-flex items-center justify-center cursor-pointer m-1 bg-green-400"
                  >
                    <span className="material-symbols-outlined">save</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(task)}
                    className="rounded-md p-2 text-neutral-100 inline-flex items-center justify-center cursor-pointer m-1 bg-orange-400"
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                )}
                <button
                  onClick={() => deleteTask(task.id)}
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
