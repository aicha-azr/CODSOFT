import { CirclePlus, CircleUserRound, LogOut, Search, StickyNote } from "lucide-react";
import SideBar from "../components/SideBar";
const Home = () => {
  return (
    <>
      <div
        className="w-screen  fixed top-0 right-0 left-0  overflow-y-auto scroll-smooth h-screen max-h-fit border border-blue-300  bg-altBackground flex flex-col font-sans grid grid-cols-10 gap-2 grid-rows-10"
       
      >
        <SideBar/>
        <div className="h-screen max-h-fit lg:col-span-8 col-span-10 col-start-1 grid grid-rows-10 col-start-3 z-10">
          <div className="row-span-1 row-start-2 lg:row-start-1 border border-black flex justify-center items-center">
            <div className="flex border border-black rounded-full p-2 py-3 gap-2 shadow-md w-2/3 bg-gradient-to-r from-blue-500/80 to-blue-500/30">
              <Search />
              <input
                type="text"
                className="w-full focus:outline-none bg-transparent"
                placeholder="Search about..."
              />
            </div>
          </div>

            <div className="row-span-1 row-start-3 lg:row-start-2 p-1 px-2 flex overflow-x-auto gap-2">
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary "></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
                    <div className="border border-black  rounded-md h-10 min-w-20 bg-secondary"></div>
            </div>



          <div className="row-span-8 row-start-4 lg:row-start-3 border border-black  flex flex-col gap-2  p-1 overflow-y-auto scroll-smooth ">

            <div className="border border-black flex flex-col h-fit p-2 rounded-md shadow-md">
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded-full bg-black animate-pulse"></div>
                <div className="h-5 w-1/5 rounded-full bg-black self-center animate-pulse"></div>
              </div>
              <div className=" w-full px-5 flex flex-col gap-1.5  text-start">
                <div className="h-10 w-full bg-black rounded-full animate-pulse"></div>
                <div className="h-[9rem] w-full bg-black rounded-xl animate-pulse"></div>
              </div>
              <div></div>
            </div>

            <div className="border border-black flex flex-col h-fit p-2 rounded-md shadow-md">
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded-full bg-black animate-pulse"></div>
                <div className="h-5 w-1/5 rounded-full bg-black self-center animate-pulse"></div>
              </div>
              <div className=" w-full px-5 flex flex-col gap-1.5  text-start">
                <div className="h-10 w-full bg-black rounded-full animate-pulse"></div>
                <div className="h-[9rem] w-full bg-black rounded-xl animate-pulse"></div>
              </div>
              <div></div>
            </div>

            <div className="border border-black flex flex-col h-fit p-2 rounded-md shadow-md">
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded-full bg-black animate-pulse"></div>
                <div className="h-5 w-1/5 rounded-full bg-black self-center animate-pulse"></div>
              </div>
              <div className=" w-full px-5 flex flex-col gap-1.5  text-start">
                <div className="h-10 w-full bg-black rounded-full animate-pulse"></div>
                <div className="h-[9rem] w-full bg-black rounded-xl animate-pulse"></div>
              </div>
              <div></div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
