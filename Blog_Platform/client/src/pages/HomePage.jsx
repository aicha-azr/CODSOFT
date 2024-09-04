import { CirclePlus, CircleUser, CircleUserRound, LogOut, Search, StickyNote, X } from "lucide-react";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import CatCard from "../components/CatCard";
import SearchBar from "../components/SearchBar";
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav = useNavigate();
  const [cookies, removeCookie] = useCookies(['token']);
  const [posts, setPosts] = useState([]);
  const getAllPosts = async()=>{
    try{
const response= await axios.get('http://localhost:8080/api/posts',{
  withCredentials: true,
})
console.log(response.data.posts)
setPosts(response.data.posts);
    }catch(e){
      console.log('error:', e)
    }
  }
  const verifyCookie = async () => {
    try {
      if(!cookies.token){
        nav('/signin')
      }
      const response = await axios.get('http://localhost:8080/', {
        withCredentials: true, 
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error verifying cookie:', error);
      nav('/signin')
    
    }
  };
  
 
  useEffect(() => {
 // console.log(cookies.token);
    verifyCookie();
    getAllPosts();
}, []);
  // Function to extract the first image URL from the content JSON
  const extractFirstImage = (content) => {
    try {
      const parsedContent = JSON.parse(content);
      const blocks = parsedContent.blocks || [];
      for (const block of blocks) {
        if (block.type === 'atomic') {
          const entityKey = block.entityRanges?.[0]?.key;
          const entity = parsedContent.entityMap[entityKey];
          if (entity?.type === 'IMAGE') {
            return entity.data.src;
          }
        }
      }
    } catch (error) {
      console.error('Error parsing content:', error);
    }
    return null;
  };
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

           
{/*
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
   */}

          <div className="row-span-9 row-start-3 lg:row-start-2  flex flex-col gap-2  p-1 overflow-y-auto scroll-smooth z-10 ">
          {posts.length > 0 ? posts.map((item, index) => {
              const firstImage = extractFirstImage(item.content); // Extract the first image
              return (
                <div className="bg-white bg-gradient-to-r from-white to-gray-100 flex flex-col h-fit p-4 rounded-xl shadow-light shadow-lg gap-2 backdrop-grayscale-0 " key={item._id} onClick={()=>nav(`/posts/${item._id}`)}>
                  <div className="flex gap-2 border-b ">
                    <div className="rounded-full bg-gray-200 flex items-center"><CircleUser size={20} /></div>
                    <div className="rounded-full self-center flex items-center">{item.author.name}</div>
                  </div>
                  <div className="w-full px-5 flex flex-col md:flex-row items-center gap-1.5 text-start">
                    <div className="h-fit w-full  rounded-full flex self-start"><h2 className="font-bold text-lg ">{item.title}</h2></div>
                    <div className={`h-[12rem] w-full rounded-xl flex items-center justify-center ${firstImage ? '' : 'hidden'}`}>
                      {firstImage?(<img src={firstImage} alt={item.title} className="h-full w-full object-full " />):""}
                    </div>
                  </div>
                </div>
              );
            }) : (
              <>
                <Card />
                <Card />
                <Card />
              </>
            )}
          



          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
