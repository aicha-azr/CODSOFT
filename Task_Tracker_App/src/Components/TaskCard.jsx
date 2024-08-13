import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";

const TaskCard = ({ task, index, deleteTask}) => {
  const [read, setRead] = useState(task);
  console.log(read);
  const [completedIndexes, setCompletedIndexes] = useState({});
  const [openEditForm, setOpenEditForm] = useState(false);
  const toggleCompletion = (index) => {
    setCompletedIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
 const handleChange = (e)=>{
    const { name, value } = e.target;
    setRead((prev) => ({ ...prev, [name]: value }));
 }
  return (
    <>
      <div className="flex justify-between border border-border-light rounded-md text-text-dark items-center w-full p-1 ">
        <div className="flex flex-col items-start p-1 gap-1.5">
          <h2
            className={`font-bold text-2xl ${
              completedIndexes[index] ? "line-through" : ""
            }`}
          >
            {task.title}
          </h2>
          <p className="text-secondary-gray">{task.description}</p>
          <div className="flex">
            <input
              type="checkbox"
              name="completed"
              value="completed"
              className="focus:bg-primary-green"
              checked={!!completedIndexes[index]}
              onChange={() => toggleCompletion(index)}
            />
            <label
              htmlFor="completed"
              className={completedIndexes[index] ? "text-primary-green" : ""}
            >
              {completedIndexes[index] ? "Completed" : "Incompleted"}
            </label>
          </div>
        </div>

        <div className="flex gap-1 self-end">
          <button
            className="hover:bg-accent-yellow hover:text-[#ffffff] rounded-xl shadow-sm hover:font-semibold hover:ring-0 focus:outline-none"
            onClick={() => setOpenEditForm(true)}
          >
            Edit
          </button>
          <button
            className="hover:bg-accent-red hover:text-[#ffffff] rounded-xl shadow-sm hover:font-semibold hover:ring-0 focus:outline-none"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </div>
      </div>
      {openEditForm && (
        <>
          <div className="fixed  inset-0 bg-black opacity-50 z-20"></div>
          <form
            action=""
            className="flex flex-col gap-3 rounded-lg shadow-md bg-[#ffffff] p-2 text-text-dark self-center md:min-w-[400px] absolute z-30"
            data-aos="fade-down"
          >
            <h2 className="self-center font-extrabold text-xl">Add new Task</h2>
            <div className="flex flex-col gap-3">
              <label htmlFor="title" className="self-start font-semibold">
                Title:
              </label>
              <input
                type="text"
                name="title"
                placeholder="write the task title..."
                className="p-1 border border-border-light focus:outline-none fucus:ring-0"
                value={read.title}
                onChange={handleChange}
                required
              />
              <label htmlFor="description" className="self-start font-semibold">
                description:
              </label>
              <textarea
                type="text"
                name="description"
                className="p-1 border border-border-light focus:outline-none fucus:ring-0 resize-none"
                placeholder="write the task description..."
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
                className=" hover:bg-secondary-gray hover:text-white shadow-md font-semibold focus:outline-none"
                onClick={() => setOpenEditForm(false)}
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};
export default TaskCard;
