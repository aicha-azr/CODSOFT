import { useEffect, useState } from "react";

const TaskCard = () =>{
    const [tasks, setTasks] = useState([]);
    const [completedIndexes, setCompletedIndexes] = useState({});
    useEffect(()=>{
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (Array.isArray(storedTasks)) {
            setTasks(storedTasks);
          } else {
            setTasks([]); 
          }
    },[])
    
    const toggleCompletion = (index) => {
        setCompletedIndexes((prev) => ({
          ...prev,
          [index]: !prev[index],
        }));
      };
    return(
        <>
           { tasks.map((item, index)=> ( <div className="flex justify-between border border-border-light rounded-md text-text-dark items-center w-full p-1 " key={index}  >
                <div className="flex flex-col items-start p-1 gap-1.5">
                <h2
                className={`font-bold text-2xl ${
                  completedIndexes[index] ? "line-through" : ""
                }`}
              >
                {item.title}
              </h2>
                <p className="text-secondary-gray">{item.description}</p>
                <div className="flex">
                <input
                  type="checkbox"
                  name="completed"
                  value="completed"
                  className="focus:bg-primary-green"
                  checked={!!completedIndexes[index]}
                  onChange={() => toggleCompletion(index)}
                />
                <label
                  htmlFor="completed"
                  className={completedIndexes[index] ? "text-primary-green" : ""}
                >
                  {completedIndexes[index] ? "Completed" : "Incompleted"}
                </label>
              
                </div>
                </div>

                <div className="flex gap-1 self-end">
                    <button className="hover:bg-accent-yellow hover:text-[#ffffff] rounded-xl shadow-sm hover:font-semibold hover:ring-0 focus:outline-none">Edit</button>
                    <button className="hover:bg-accent-red hover:text-[#ffffff] rounded-xl shadow-sm hover:font-semibold hover:ring-0 focus:outline-none">Delete</button>
                </div>
            </div> ))
           
          }
        </>
    )
}
export default TaskCard;