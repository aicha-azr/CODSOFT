import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import toast, { Toaster } from "react-hot-toast";

const TaskCard = ({ task, index, deleteTask, updateTask, toggleCompletion }) => {
  const [read, setRead] = useState(task);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [openEditForm, setOpenEditForm] = useState(false);
  const notify = () => toast.success("The task is updated successfully");

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem("Completed")) || [];
    setCompletedTasks(completed);
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setRead((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTask(index, read);
    setOpenEditForm(false);
    notify();
  };

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 md:grid-rows-2 md:flex-row border border-border-light rounded-md text-text-dark p-1 w-full">
        <div className="col-span-3 md:col-span-2 flex flex-col self-start items-start p-1 gap-1.5 w-full md:w-auto overflow-hidden text-ellipsis whitespace-wrap row-span-3">
          <h2
            className={`font-bold text-2xl text-start whitespace-wrap overflow-hidden text-ellipsis w-full ${
              completedTasks.includes(JSON.stringify(task)) ? "line-through" : ""
            }`}
          >
            {task.title}
          </h2>
          <p className="text-secondary-gray break-words text-start whitespace-wrap overflow-hidden text-ellipsis w-full">
            {task.description}
          </p>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="completed"
              value="completed"
              className="hidden"
              id={`checkbox-${index}`}
              checked={completedTasks.includes(JSON.stringify(task))}
              onChange={() => toggleCompletion(task)}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className={`flex items-center justify-center w-5 h-5 border border-gray-300 rounded-md cursor-pointer ${
                completedTasks.includes(JSON.stringify(task)) ? "bg-green-600" : "bg-border-light"
              } relative`}
            >
              {completedTasks.includes(JSON.stringify(task)) && (
                <svg
                  className="absolute w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </label>
            <label
              htmlFor={`checkbox-${index}`}
              className={completedTasks.includes(JSON.stringify(task)) ? "text-primary-green" : ""}
            >
              {completedTasks.includes(JSON.stringify(task)) ? "Completed" : "Incomplete"}
            </label>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-3 items-end md:row-start-2 col-start-3 w-full text-sm md:text-md flex justify-end gap-3">
          <button
            className="hover:bg-accent-yellow hover:text-[#ffffff] rounded-xl shadow-sm hover:font-semibold hover:ring-0 focus:outline-none w-fit"
            onClick={() => setOpenEditForm(true)}
          >
            Edit
          </button>
          <button
            className="hover:bg-accent-red hover:text-[#ffffff] rounded-xl shadow-sm hover:font-semibold hover:ring-0 focus:outline-none w-fit"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </div>
      </div>
      {openEditForm && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-20"></div>
          <div className="flex justify-center absolute right-0 left-0">
            <form
              action=""
              className="flex flex-col gap-3 rounded-lg shadow-md bg-[#ffffff] p-2 text-text-dark self-center md:min-w-[400px] min-w-[300px] z-30"
              data-aos="fade-down"
              onSubmit={handleUpdate}
            >
              <h2 className="self-center font-extrabold text-xl">
                Add new Task
              </h2>
              <div className="flex flex-col gap-3">
                <label htmlFor="title" className="self-start font-semibold">
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Write the task title..."
                  className="p-1 border border-border-light focus:outline-none focus:ring-0"
                  value={read.title}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="description"
                  className="self-start font-semibold"
                >
                  Description:
                </label>
                <textarea
                  type="text"
                  name="description"
                  className="p-1 border border-border-light focus:outline-none focus:ring-0 resize-none"
                  placeholder="Write the task description..."
                  value={read.description}
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-3 self-center">
                <button
                  className="bg-primary-blue hover:bg-[#0056b3] hover:text-white shadow-md font-semibold focus:outline-none"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="hover:bg-secondary-gray hover:text-white shadow-md font-semibold focus:outline-none"
                  onClick={() => setOpenEditForm(false)}
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
            <Toaster position="top-center" autoClose={6000} />
          </div>
        </>
      )}
    </>
  );
};

export default TaskCard;
