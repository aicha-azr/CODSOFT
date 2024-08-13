import { useState } from "react";
import TaskForm from "./TaskForm";

const Header = ({ onAddTask }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute top-1 right-0 left-0 row-span-1 bg-primary-blue max-w-screen  h-fit flex justify-between p-1 items-center py-2 rounded-md">
        <h2 className="font-bold text-start text-2xl">Task Tracker</h2>
        <button
          className="bg-primary-blue hover:bg-[#0056b3] text-[#ffffff] rounded-lg border border-[#ffffff] focus:ring-0 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          add Task
        </button>
      </div>
      <TaskForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        addTask={onAddTask}
      />
    </>
  );
};
export default Header;
