import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [CompletedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);



  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const updateTask = (index, updatedTask) => {
    const task = [...tasks];
    task[index] = updatedTask;
    setTasks(task);
    localStorage.setItem("tasks", JSON.stringify(task));
  };


  return (
    <>
      <div className="fixed top-0 right-0 left-0 grid grid-rows-10 max-w-screen w-screen max-w-full h-screen">
        <Header onAddTask={addTask} tasks={tasks} />
        <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask}  />
      </div>
    </>
  );
}

export default App;
