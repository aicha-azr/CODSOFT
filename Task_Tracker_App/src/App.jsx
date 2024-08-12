import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 grid grid-rows-10 max-w-screen w-screen max-w-full items-center justify-center h-fit border border-black ">
        <Header /> 

      </div>
    </>
  );
}

export default App;
