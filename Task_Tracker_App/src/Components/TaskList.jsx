import TaskCard from "./TaskCard";

const TaskList = ({tasks, onDelete})=>{
    return(
        <>
            <div className="row-span-9 row-start-2 w-screen p-3 flex flex-col gap-1 font-sans border border-black overflow-y-auto scroll-smooth h-full max-h-screen">
              {tasks.slice().reverse().map((task, index)=>  <TaskCard  key={index} index={tasks.length - 1 - index} task={task} deleteTask={onDelete} /> ) }
            </div>
        </>
    )
}
export default TaskList;