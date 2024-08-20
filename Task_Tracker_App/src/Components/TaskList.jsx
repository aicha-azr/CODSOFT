import TaskCard from "./TaskCard";

const TaskList = ({tasks, onDelete, onUpdate, Completed, CTask})=>{
   
    return(
        <>
            <div className="flex flex-col w-full md:w-full max-w-full p-3 gap-2 font-sans overflow-y-auto scroll-smooth max-h-screen  row-span-9 row-start-2 ">
              {tasks.slice().reverse().map((task, index)=>  <TaskCard  key={index} index={tasks.length - 1 - index} task={task} deleteTask={onDelete} updateTask={onUpdate} toggleCompletion={Completed} completedTasks= {CTask}/> ) }
            </div>
        </>
    )
}
export default TaskList;