import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 grid grid-rows-10 max-w-screen w-screen max-w-full  h-screen border border-black ">
        <Header /> 
        <TaskList />
      </div>
    </>
  );
}

export default App;
