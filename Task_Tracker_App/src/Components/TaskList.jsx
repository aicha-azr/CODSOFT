import TaskCard from "./TaskCard";

const TaskList = ({tasks})=>{
    const reversedTasks = [...tasks].reverse();
    return(
        <>
            <div className="row-span-9 row-start-2 w-screen p-3 flex flex-col gap-1 font-sans border border-black overflow-y-auto scroll-smooth h-full max-h-screen">
              {reversedTasks.map((task, index)=>  <TaskCard  key={index} task={task}/>) }
            </div>
        </>
    )
}
export default TaskList;