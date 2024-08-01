import { useForm } from "react-hook-form";
import api from "../js/api";

const FormTable = ({ getTasks }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post("/", data);
      getTasks();
      reset();
      console.log("Sucessfull on POST task: ", data);
    } catch (error) {
      console.log("Error on POST task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex mb-12 gap-4 w-full">
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
  );
};

export default FormTable;
