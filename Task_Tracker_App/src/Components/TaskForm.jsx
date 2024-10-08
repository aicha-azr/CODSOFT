import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from 'react-hot-toast';

const TaskForm = ({ isOpen, onClose, addTask, tasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const notify = () => {
    console.log("success");
    toast.success("The task is added successfully");
  };
  const warningMessage = () => {
    toast.warning("the title is required!");
  };
  const errorMessage = ()=>{
    console.log('error');
    toast.error('the task is not added ')
  }
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    if (!title.trim()) {
      console.log("Title is empty");
      warningMessage();
      return;
    }
    const task = { title, description };
    addTask(task);
    
      notify();

    setTitle("");
    setDescription("");
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed  inset-0 bg-black opacity-50 z-10"></div>
          <div className="flex justify-center items-center top-20 absolute right-0 left-0">
          <form
            action=""
            className="flex flex-col gap-3 rounded-lg shadow-md bg-[#ffffff] p-2 text-text-dark self-center  md:min-w-[400px] min-w-[300px] z-30"
            onSubmit={handleSubmit}
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
                maxLength="35"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                maxLength="70"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                onClick={() => onClose()}
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        </>
      )}
    </>
  );
};
export default TaskForm;
