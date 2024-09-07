import technologies from "../db/tech";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import React from 'react'
import IconCloud from "./IconCloud";



const About = () => {
  
 
  return (
    <>
      <section
        className="py-12 flex flex-col  mt-10 h-screen min-h-fit  w-full"
        id="about"
      >
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-[#023246] self-start px-3 font-mono">
          What I do
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center w-fit  p-2 rounded-lg   md:justify-between ">
        <div className="flex flex-col md:block  font-mono min-h-fit h-full md:gap-5 md:w-1/2 ">
        <div
  className="relative w-full mt-5 p-3 text-start text-base font-bold bg-[#f9feff] rounded-xl shadow-md hover:shadow-pink2 border cursor-pointer duration-500 hover:border-pink2  group overflow-hidden"
>
  {/* Hover Effects */}
  <div className="absolute w-12 h-12 bg-pink2 rounded-full blur-lg right-2 top-1 before:content[''] group-hover:before:blur-3xl duration-500  z-0"></div>
  <div className="absolute w-12 h-12 bg-b4 rounded-full blur-lg right-8 top-5 after:content[''] group-hover:after:blur-3xl duration-500 z-0  "></div>
            <div className="flex h-fit gap-2 p-1 items-center">
              <div className="bg-pink2 h-1.5 w-1.5 animate-ping rounded-full"></div>
              <h3 className="font-bold text-xl text-black">
                Front-End Development
              </h3>
            </div>
            <div className="flex h-fit gap-2 p-1">
              <div className="border border-pink2 h-50 rounded-full"></div>
              <p className="text-[#023246]">
                <span className="font-bold">
                  Creating User-Friendly Interfaces:
                </span>{" "}
                I develop responsive and engaging interfaces using React.js,
                ensuring a seamless user experience across all devices.
              </p>
            </div>
          </div>

          <div
  className="relative w-full mt-5 p-3 text-start text-base font-bold bg-[#f9feff] rounded-xl shadow-md hover:shadow-pink2 border cursor-pointer duration-500 hover:border-pink2 md:ml-10 group overflow-hidden"
>
  {/* Hover Effects */}
  <div className="absolute w-12 h-12 bg-pink2 rounded-full blur-lg right-2 top-1 before:content[''] group-hover:before:blur-3xl duration-500  z-0"></div>
  <div className="absolute w-12 h-12 bg-b4 rounded-full blur-lg right-8 top-5 after:content[''] group-hover:after:blur-3xl duration-500 z-0 a "></div>
            <div className="flex h-fit gap-2 p-1 items-center">
              <div className="bg-pink2 h-1.5 w-1.5 animate-ping rounded-full"></div>
              <h3 className="font-bold text-xl text-black">Back-End Development</h3>
            </div>
            <div className="flex h-fit gap-2 p-1">
              <div className="border border-pink2 h-50 rounded-full"></div>
              <p className="text-[#023246]">
                <span className="font-bold">Building Robust Applications:</span>{" "}
                I build reliable server-side applications with Node.js and
                Express.js, and manage databases efficiently using MongoDB.
              </p>
            </div>
          </div>

          <div
  className="relative w-full mt-5 p-3 text-start text-base font-bold bg-[#f9feff] rounded-xl shadow-md hover:shadow-pink2 border cursor-pointer duration-500 hover:border-pink2 md:ml-20 group overflow-hidden"
>
  {/* Hover Effects */}
  <div className="absolute w-12 h-12 bg-pink2 rounded-full blur-lg right-2 top-1 before:content[''] group-hover:before:blur-3xl duration-500  z-0 "></div>
  <div className="absolute w-12 h-12 bg-b4 rounded-full blur-lg right-8 top-5 after:content[''] group-hover:after:blur-3xl duration-500 z-0  "></div>
  
  {/* Card Header */}
  <div className="flex items-center gap-2 p-1 z-10">
    <div className="bg-pink2 h-1.5 w-1.5 animate-ping rounded-full"></div>
    <h3 className="font-bold text-xl text-black">Full-Stack Integration</h3>
  </div>
  
  {/* Card Content */}
  <div className="flex gap-2 p-1 z-10">
    <div className="border border-pink2 bg-pink2 h-50 w-1 rounded-full"></div>
    <p className="text-[#023246]">
      <span className="font-bold">Delivering End-to-End Solutions:</span> I
      integrate front-end and back-end technologies to ensure smooth and secure
      communication, delivering comprehensive solutions.
    </p>
  </div>
</div>

        </div>
        <div className="z-10 self-start"> 
        <IconCloud/>
        </div>
        </div>
      </section>
    </>
  );
}
export default About;
