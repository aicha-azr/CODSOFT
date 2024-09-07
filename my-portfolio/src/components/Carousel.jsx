import { Carousel } from "@material-tailwind/react";
import projects from "../db/projects";
import { useEffect, useState } from "react";
import { Link } from "lucide-react";
import Aos from "aos";
import 'aos/dist/aos.css';
export function CarouselCustomNavigation() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [displayedIndex, setDisplayedIndex] = useState(null);
 const [clickedEvent, setClickEvent] = useState('All');
const filtrage = (value) => {
  Aos.refresh();
    setClickEvent(value);
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
        once: false 
      });
    }, [ ]); 
  ;
  return (
    <div className=' flex  flex-col gap-3'>
      <div className="flex justify-around md:gap-6 md:w-1/2 text-black md:pl-4 font-medium">
        <p className={`focus:outline-none p-1 hover:text-b1 hover:bg-gray-200 hover:cursor-pointer p-2 rounded-full ${clickedEvent === 'All'?'bg-gray-200 text-b1':'bg-transparent'}`} onClick={() => filtrage("All")}>All</p>
        <p className={`focus:outline-none p-1 hover:text-b1 hover:bg-gray-200 hover:cursor-pointer p-2 rounded-full ${clickedEvent === 'Full Stack'?'bg-gray-200 text-b1':'bg-transparent'}`} onClick={() => filtrage("Full Stack")
        }>Full Stack</p>
        <p className={`focus:outline-none p-1 hover:text-b1 [#F564AB] hover:bg-gray-200 hover:bg-gray-200 hover:cursor-pointer p-2 rounded-full ${clickedEvent === 'Frontend'?'bg-gray-200 text-b1':'bg-transparent'}`} onClick={() => filtrage("Frontend")}>Frontend</p>
        <p className={`focus:outline-none p-1 hover:text-b1 hover:bg-gray-200 hover:cursor-pointer p-2 rounded-full ${clickedEvent === 'Backend'?'bg-gray-200 text-b1':'bg-transparent'}`} onClick={() => filtrage("Backend")}>Backend</p>
        </div>
    <div className="  flex flex-wrap flex-row md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-3 items-start w-fit justify-start ">
    {filteredProjects.map((item, index) => (
                <div
                    key={index}
                    className='flex flex-col gap-4 items-center md:w-1/2 lg:w-[400px] h-[15.5rem] rounded-[11px] shadow-beige shadow-xl bg-[#f9feff] md:w-full  h-fit relative hover:scale-0.5 transform cursor-pointer py-5'
                   
                    onMouseEnter={() => setDisplayedIndex(index)}
                    onMouseLeave={() => setDisplayedIndex(null)}
                    >
                   <div className="flex p-3  bg-gray-200 rounded-lg m-2">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="shadow-md rounded-lg w-full h-full transition duration-300 delay-150 hover:delay-300 hover:-translate-y-1 hover:scale-110 "
                    /> </div>
                    <div className="flex flex-col text-start px-2">
                    <h3 className={'text-BRoyal md:text-xl bg-brightness-50  font-semibold'}>{item.title}</h3>
                   <div className="flex">
                    <p className="text-[#023246] ">{item.description}</p>
                    <a href={item.link} className="self-end">
                        <Link  color="#023246" size={30} className="bg-pink rounded-full p-1 mx-2 "/></a>
                   </div>

                    </div>
                    <div>

                    </div>
                  { /* <div className="absolute left-1 bottom-2 backdrop-opacity-10">
                        <h3 className={displayedIndex === index ?'hidden':'text-[#023246] md:text-xl bg-brightness-50 font-medium'}>{item.title}</h3>
                    </div>
                    <div className={displayedIndex === index ? 'block absolute h-fit min-h-full z-20 p-1 py-0 bg-beige text-blueGreen text-start rounded-xl flex flex-col justify-center bg-opacity-90' : 'hidden'} data-aos="fade-up">
                    <h3 className={displayedIndex === index ?'text-black font-medium md:text-xl bg-brightness-50':'hidden'} >{item.title}</h3>
                        <p className="text-[#023246]">{item.description}</p>
                        <a href={item.link} className="absolute top-1 right-1">
                        <Link  color="#023246" size={30} className="bg-pink rounded-full p-1 mx-2 "/></a>
                        
                    </div>*/}
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