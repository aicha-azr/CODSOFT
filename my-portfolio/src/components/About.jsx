import technologies from "../db/tech";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const About = ()=>{
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true 
          },[]);
      });
    return(
        <>
        <section className="py-12 flex flex-col  gap-16 mt-10   w-full" id="about">
         {/*     <div className="w-full mb-8 md:w-1/2 self-start flex flex-col border border-red-500">
            
        <h2 className="max-w-xl mb-4 text-3xl font-extrabold tracking-tight md:self-start md:w-1/2 leading-none md:text-4xl xl:text-5xl text-bleuGreen" >About Me</h2> 
        
            <div className=" bg-blur-md bg-pink bg-opacity-40 md:rounded-xl md:ml-3 p-3 mx-3 rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm" >
                <p className="text-lg text-black mb-4 py-3 leading-8">I am a passionate Junior Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). With a solid foundation in both front-end and back-end development, I enjoy creating dynamic web applications with excellent user experiences.

</p>
<p className="text-lg text-black mb-4 py-3 leading-8">
I am committed to continuous learning in web development and aim to leverage my skills to create innovative solutions that exceed client expectations. I thrive in collaborative environments and am eager to take on new challenges and learn from experienced professionals.

</p>
            </div>
            </div>*/}
            
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-[#023246] self-start animate-textAni px-3 font-mono " >What i do</h2>  

            <div className="hidden lg:flex-row md:flex md:flex-col md:justify-center md:items-center  md:block mx-2 gap-5 gap-10 lg:gap-20 font-mono">
            <div className="bg-pink2 h-fit  rounded-xl lg:w-1/4 md:w-1/2 w-full rotate-[6deg] ">
                <div className="bg-beige h-fit w-full rounded-xl   p-1 hover:scale-110 hover:shadow-lg hover:shadow-pink2 rotate-[-6deg]">
                    <h3 className="font-bold text-xl text-black">Front-End Development</h3>
                    <p className="text-[#023246]">
                    <span className="font-bold ">Creating User-Friendly Interfaces:</span> I develop responsive and engaging interfaces using React.js, ensuring a seamless user experience across all devices.
                    </p>
                </div>
                </div>

                <div className="bg-pink2 h-fit rounded-xl lg:w-1/4 md:w-1/2 rotate-[6deg]">
                <div className="bg-beige h-fit w-full rounded-xl  p-1 hover:scale-110 hover:shadow-lg hover:shadow-pink2 rotate-[-6deg]"
            >
                    <h3 className="font-bold text-xl text-black">Back-End Development</h3>
                    <p className="text-[#023246]">
                    <span className="font-bold">Building Robust Applications:</span> I build reliable server-side applications with Node.js and Express.js, and manage databases efficiently using MongoDB.
                    </p>
                </div>
                </div>
                <div className="bg-pink2 lg:h-1/4 md:h-1/2  rounded-xl lg:w-1/4 md:w-1/2 rotate-[6deg] ">
                <div className="bg-beige h-fit max-h-fit w-fit rounded-xl   p-1 hover:scale-110 hover:shadow-lg hover:shadow-pink2 rotate-[-6deg]">
                <h3 className="font-bold text-xl text-black">Full-Stack Integration</h3>
                    <p className="text-[#023246]">
                    <span className="font-bold">Delivering End-to-End Solutions:</span> I integrate front-end and back-end technologies to ensure smooth and secure communication, delivering comprehensive solutions.
                    </p>
                </div>
            </div>
            </div>
            
           
  
               <div className="grid grid-row  block md:hidden mx-2 gap-5">
               <div className="bg-beige h-fit w-fit rounded-xl p-1 hover:scale-110 hover:shadow-lg hover:shadow-pink2">
                    <h3 className="font-bold text-xl">Front-End Development</h3>
                    <p>
                    <span className="font-bold">Creating User-Friendly Interfaces:</span> I develop responsive and engaging interfaces using React.js, ensuring a seamless user experience across all devices.
                    </p>
                </div>

                    <div className="bg-beige h-fit w-fit rounded-xl p-1 hover:scale-110 hover:shadow-lg hover:shadow-pink2 "
            >
                    <h3 className="font-bold text-xl">Back-End Development</h3>
                    <p>
                    <span className="font-bold">Building Robust Applications:</span> I build reliable server-side applications with Node.js and Express.js, and manage databases efficiently using MongoDB.
                    </p>
                </div>

                    <div className="bg-beige h-full max-h-fit w-full rounded-xl p-1 hover:scale-110 hover:shadow-lg hover:shadow-pink2">
                <h3 className="font-bold text-xl">Full-Stack Integration</h3>
                    <p>
                    <span className="font-bold">Delivering End-to-End Solutions:</span> I integrate front-end and back-end technologies to ensure smooth and secure communication, delivering comprehensive solutions.
                    </p>
                </div>
               </div>
</section>

                {/*<div className="flex flex-col gap-3 justify-center md:mb-8 ">
                <h3 className="text-xl text-BRoyal font-bold mb-4 text-center">Technologies I master:</h3>
                <div className="grid grid-cols-5 gap-4 items-center ">
                    {technologies.map((item, index) => (
                        <img key={index} src={item} alt="tech" className={`rounded-md shadow w-10 h-10 mx-2 mb-2 animate-bounce [animation-delay:-0.1s]`} />
                    ))}
                </div>
                </div>*/}
        </>
    )
}
export default About;