import { CirclePlus, CircleUserRound, LogOut, Search, StickyNote, X } from "lucide-react";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import CatCard from "../components/CatCard";
import SearchBar from "../components/SearchBar";
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
const Home = () => {
  return (
    <>
      <div
        className="w-screen  fixed top-0 right-0 left-0  overflow-y-auto scroll-smooth h-screen max-h-fit border border-blue-300  bg-altBackground flex flex-col font-sans grid grid-cols-10 gap-2 grid-rows-10"
       
      >
        <SideBar/>
        <div className="h-screen max-h-fit lg:col-span-8 col-span-10 grid grid-rows-10 col-start-1 z-10 ">
          <div className="row-span-1 row-start-2 py-5 lg:row-start-1 flex justify-center items-center bg-shader-gradient relative" >
            <SearchBar/>
           
          </div>

            <div className="row-span-1 row-start-3 lg:row-start-2 p-1 px-2 flex items-center overflow-x-auto gap-2 bg-shader-gradient z-10">
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    
            </div>

            <ShaderGradientCanvas
     importedFiber={{ ...fiber, ...drei, ...reactSpring }}
     style={{
       position: 'absolute',
       top: 0,
     }}
   >
     <ShaderGradient
       control='query'
       urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%2394ffd1&color2=%236bf5ff&color3=%23ffffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false'
       className="absolute top-0 right-0 left-0 bg-cover blur-lg  z-0 w-full"
     />
   </ShaderGradientCanvas>

          <div className="row-span-8 row-start-4 lg:row-start-3  flex flex-col gap-2  p-1 overflow-y-auto scroll-smooth z-10 ">

           <Card/>
           <Card/>
           <Card/>



          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
