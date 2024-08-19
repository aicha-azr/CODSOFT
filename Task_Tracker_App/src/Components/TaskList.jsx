import TaskCard from "./TaskCard";

const TaskList = ({tasks, onDelete, onUpdate})=>{
   
    return(
        <>
            <div className="grid grid-cols-1 w-fit md:w-full max-w-full p-3 gap-1 font-sans overflow-y-auto scroll-smooth max-h-screen  row-span-9 row-start-2">
              {tasks.slice().reverse().map((task, index)=>  <TaskCard  key={index} index={tasks.length - 1 - index} task={task} deleteTask={onDelete} updateTask={onUpdate} /> ) }
            </div>
        </>
    )
}
export default TaskList;