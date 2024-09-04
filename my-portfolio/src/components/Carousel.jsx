import { Carousel } from "@material-tailwind/react";
import projects from "../db/projects";
import { useEffect, useState } from "react";
import { Link } from "lucide-react";
import Aos from "aos";
 
export function CarouselCustomNavigation() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [displayedIndex, setDisplayedIndex] = useState(null);
  const filtrage = (value) => {
    if (value === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(item => item.category === value));
    }
  };
  useEffect(() => {
    Aos.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true 
      },[]);
  });
  return (
    <div className=' flex  flex-col gap-3'>
      <div className="flex justify-around md:gap-6 md:w-1/2 text-black md:pl-4 font-medium">
        <p className="  p-1 px-2 focus:outline-none hover:text-[#F564AB]  hover:cursor-pointer" onClick={() => filtrage("All")}>All</p>
        <p className="  focus:outline-none p-1 hover:text-[#F564AB] hover:cursor-pointer" onClick={() => filtrage("Full Stack")}>Full Stack</p>
        <p className="  focus:outline-none p-1 hover:text-[#F564AB] hover:cursor-pointer" onClick={() => filtrage("Frontend")}>Frontend</p>
        <p className="  focus:outline-none p-1 hover:text-[#F564AB]  hover:cursor-pointer" onClick={() => filtrage("Backend")}>Backend</p>
        </div>
    <div className="  flex flex-wrap flex-row gap-8 p-3 items-center w-fit justify-start ">
    {filteredProjects.map((item, index) => (
                <div
                    key={index}
                    className='flex flex-col gap-4 items-center md:w-1/2 lg:w-[400px] h-[15.5rem] rounded-[11px] shadow-md shadow-xl h-fit relative'
                   
                    onMouseEnter={() => setDisplayedIndex(index)}
                    onMouseLeave={() => setDisplayedIndex(null)}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="shadow-md rounded-lg w-full h-full hover:brightness-50"
                    />
                    <div className="absolute left-1 bottom-2 backdrop-opacity-10">
                        <h3 className={displayedIndex === index ?'hidden':'text-[#023246] md:text-xl bg-brightness-50 font-medium'}>{item.title}</h3>
                    </div>
                    <div className={displayedIndex === index ? 'block absolute h-fit min-h-full z-20 p-1 py-0 bg-beige text-blueGreen text-start rounded-xl flex flex-col justify-center bg-opacity-90' : 'hidden'} data-aos="fade-up">
                    <h3 className={displayedIndex === index ?'text-black font-medium md:text-xl bg-brightness-50':'hidden'} >{item.title}</h3>
                        <p className="text-[#023246]">{item.description}</p>
                        <a href={item.link} className="absolute top-1 right-1">
                        <Link  color="#023246" size={30} className="bg-pink rounded-full p-1 mx-2 "/></a>
                        
                    </div>
                </div>
            ))}
    
    </div>
</div>
  );
}
export default CarouselCustomNavigation;
{/**md:h-[30rem] md:w-[50rem] h-[10rem] w-[20rem]**
  
  
  
  
  <div className=' w-full max-w-fit lg:w-full lg:max-w-fit  overflow-x-auto scroll-smooth border border-black'>
    <div className="  flex  flex-rows-3 gap-8 p-3 border border-green-800 items-center w-fit">
      {projects.map((item, index) => (
                    <div key={index} className=' flex flex-col gap-5 items-center p-3 md:w-[30rem]  max-h-[30rem] h-fit rounded rounded-[11px] bg-bleuGreen shadow shadow-md w-[15rem]'>
                        <img src={item.image}  alt={item.title} className= "shadow shadow-md rounded-lg " />
                        <a href={item.link} className='text-green md:text-xl'>{item.title}</a>
                    </div>
                ))}
    
    </div>
</div>*/}