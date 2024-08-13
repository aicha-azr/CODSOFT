import { useEffect, useState } from "react";

const TaskCard = ({task, key}) =>{
    
    const [completedIndexes, setCompletedIndexes] = useState({});
    
    const toggleCompletion = (index) => {
        setCompletedIndexes((prev) => ({
          ...prev,
          [index]: !prev[index],
        }));
      };
    return(
        <>
          <div className="flex justify-between border border-border-light rounded-md text-text-dark items-center w-full p-1 " >
                <div className="flex flex-col items-start p-1 gap-1.5">
                <h2
                className={`font-bold text-2xl ${
                  completedIndexes[key] ? "line-through" : ""
                }`}
              >
                {task.title}
              </h2>
                <p className="text-secondary-gray">{task.description}</p>
                <div className="flex">
                <input
                  type="checkbox"
                  name="completed"
                  value="completed"
                  className="focus:bg-primary-green"
                  checked={!!completedIndexes[key]}
                  onChange={() => toggleCompletion(key)}
                />
                <label
                  htmlFor="completed"
                  className={completedIndexes[key] ? "text-primary-green" : ""}
                >
                  {completedIndexes[key] ? "Completed" : "Incompleted"}
                </label>
              
                </div>
                </div>

                <div className="flex gap-1 self-end">
                    <button className="hover:bg-accent-yellow hover:text-[#ffffff] rounded-xl shadow-sm hover:font-semibold hover:ring-0 focus:outline-none">Edit</button>
                    <button className="hover:bg-accent-red hover:text-[#ffffff] rounded-xl shadow-sm hover:font-semibold hover:ring-0 focus:outline-none">Delete</button>
                </div>
            </div> 
        </>
    )
}
export default TaskCard;