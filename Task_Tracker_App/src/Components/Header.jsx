import { useState } from "react";
import TaskForm from "./TaskForm";
import { Toaster } from "react-hot-toast";

const Header = ({ onAddTask, tasks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute top-1 right-0 left-0 row-span-1 bg-gradient-to-r from-blue-500 to-blue-700 max-w-screen  h-fit flex justify-between p-1 items-center py-2 rounded-md">
        <h2 className="font-bold text-start text-2xl">Task Tracker</h2>
        <button
          className="bg-white text-blue-700 hover:bg-blue-600 rounded-md shadow-lg px-4 py-2 focus:ring-0 focus:outline-none hover:text-black"
          onClick={() => setIsOpen(true)}
        >
          add Task
        </button>
      </div>
      <Toaster position="top-center" autoClose={6000} />
      <TaskForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        addTask={onAddTask}
        tasks={tasks}
      />
    </>
  );
};
export default Header;
