import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { useNavigate } from "react-router-dom";
const LandingPage = ()=>{
const nav = useNavigate();
return(<>
<div className="w-screen fixed top-0 right-0 left-0 px-2 overflow-y-auto scroll-smooth h-screen bg-radial-gradient bg-cover"  style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F4F6',
    backgroundImage: 'radial-gradient(rgba(30, 58, 138, 0.171) 2px, transparent 0)',
    backgroundSize: '30px 30px',
    backgroundPosition: '-5px -5px',
  }}>
    <div className="z-10 fixed w-full right-0 left-0">
     <NavBar/>    
    </div>
   
   <div className="flex justify-center items-center w-full h-full z-10 relative" id="home">
   <div className="flex flex-col justify-around py-20 h-full self-center items-center w-1/2 text-textPrimary gap-9">
   <div className="flex flex-col justify-between h-1/2 p-3"> 
    <h1 className="font-bold ">Stay Ahead in Tech Innovation</h1>
    <h2 className="font-semibold text-lg">Your go-to source for the latest trends, insights, and tutorials in the world of technology.</h2>
    </div>
    <button className="bg-accent text-white py-3 px-6 rounded-full hover:bg-[#059669] w-fit ml-3 shadow-md" onClick={()=>nav('/signup')}>Explore Now</button>
   </div>
  {/* <div className=" w-1/2 flex flex-col justify-center items-center gap-4">
        <div className="  h-40 w-[350px] bg-textSecondary rounded-3xl shadow-lg  -skew-y-6 animate-pulse"></div>
        <div className=" h-40 w-[350px] bg-textSecondary rounded-3xl shadow-lg  skew-y-6 animate-pulse"></div>
   </div>*/}
   </div>
   
   <ShaderGradientCanvas
     importedFiber={{ ...fiber, ...drei, ...reactSpring }}
     style={{
       position: 'absolute',
       top: 0,
     }}
     className='z-0'
   >
    
     <ShaderGradient
       control='query'
       urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%2394ffd1&color2=%236bf5ff&color3=%23ffffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false'
       className="absolute top-0 right-0 left-0 bg-cover blur-lg  z-0 w-full"
     />
   </ShaderGradientCanvas>
</div>
    
</>)

}
export default  LandingPage;