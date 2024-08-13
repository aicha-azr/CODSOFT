import TaskCard from "./TaskCard";

const TaskList = ()=>{
    return(
        <>
            <div className="row-span-9 row-start-2 w-screen p-3 flex flex-col gap-1 font-sans border border-black overflow-y-auto scroll-smooth h-full max-h-screen">
                <TaskCard />
            </div>
        </>
    )
}
export default TaskList;