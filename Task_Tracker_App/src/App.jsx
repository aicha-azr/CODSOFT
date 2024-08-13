import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);
// add the task
  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  //delete the task
  const deleteTask = (index)=>{
    const updated = tasks.filter((_, i) => i !== index);
    console.log(updated)
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));

  }
  return (
    <>
      <div className="fixed top-0 right-0 left-0 grid grid-rows-10 max-w-screen w-screen max-w-full  h-screen border border-black ">
        <Header onAddTask={addTask} tasks={tasks} />
        <TaskList tasks={tasks} onDelete={deleteTask}/>
      </div>
    </>
  );
}

export default App;
