import NavBar from "../components/NavBar";

const LandingPage = ()=>{

return(<>
<div className="w-screen border border-black fixed top-0 right-0 left-0 px-2 overflow-y-auto scroll-smooth h-screen bg-radial-gradient bg-cover"  style={{
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
   
   <div className="flex justify-center items-center w-full h-full ">
   <div className="flex flex-col justify-around py-20 h-full text-start w-1/2 text-textPrimary gap-9">
   <div className="flex flex-col gap-4 p-3"> 
    <h1 className="font-bold ">Stay Ahead in Tech Innovation</h1>
    <h2 className="font-semibold text-lg">Your go-to source for the latest trends, insights, and tutorials in the world of technology.</h2>
    </div>
    <button className="bg-accent text-white py-3 px-6 rounded-full hover:bg-[#059669] w-fit ml-3">Explore Now</button>
   </div>
   <div className=" w-1/2 flex flex-col justify-center items-center gap-4">
        <div className="  h-40 w-[350px] bg-textSecondary rounded-3xl shadow-lg  -skew-y-6 animate-pulse"></div>
        <div className=" h-40 w-[350px] bg-textSecondary rounded-3xl shadow-lg  skew-y-6 animate-pulse"></div>
   </div>
   </div>
</div>
    
</>)

}
export default  LandingPage;