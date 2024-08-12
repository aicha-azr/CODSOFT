import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TaskForm = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        AOS.init({
          duration: 1200, 
        });
      }, []);

     const handleSubmit = (e)=>{
        e.preventDefault();
        setTitle("");
        setDescription("");
        if (onClose) onClose();
     }
 
  return (
    <>

    {isOpen &&  <form
        action=""
        className="flex flex-col row-span-5 row-start-3 gap-3 rounded-lg shadoe-md bg-[#ffffff] p-2 text-text-dark w-full md:min-w-[400px]"
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
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
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
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </div>
        <div className="flex gap-3 self-center">
          <button className="bg-primary-blue hover:bg-[#0056b3] hover:text-white shadow-md font-semibold"
          type="submit">
            Save
          </button>
          <button
            className=" hover:bg-secondary-gray hover:text-white shadow-md font-semibold"
            onClick={() => onClose()}
          >
            Cancel
          </button>
        </div>
      </form>}
    </>
  );
};
export default TaskForm;
