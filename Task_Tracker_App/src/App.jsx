import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem("Completed")) || [];
    setCompletedTasks(completed);
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

  const toggleCompletion = (task) => {
    const taskString = JSON.stringify(task);
    let updated;
    if (completedTasks.includes(taskString)) {
      updated = completedTasks.filter((elem) => elem !== taskString);
    } else {
      updated = [...completedTasks, taskString];
    }

    // Update localStorage and state
    localStorage.setItem("Completed", JSON.stringify(updated));
    setCompletedTasks(updated);
  };
  return (
    <>
      <div className="fixed top-0 right-0 left-0 grid grid-rows-10 max-w-screen w-screen max-w-full h-screen">
        <Header onAddTask={addTask} tasks={tasks} />
        <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} Completed={toggleCompletion} CTask={completedTasks} />
      </div>
    </>
  );
}

export default App;
