import NavBar from "../components/NavBar";

const SignupPage = ()=>{
 return(<>
    <div className="w-screen border border-black fixed top-0 right-0 left-0 px-2 overflow-y-auto scroll-smooth h-screen bg-radial-gradient bg-cover flex flex-col font-sans"  style={{
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
    <div className="flex flex-col gap-2 justify-center items-center w-full h-full ">
        <h2 className="font-semibold text-2xl ">Sign Up</h2>
    <form action="" className=" flex flex-col w-1/3  items-center justify-center gap-3 p-2">
        <label className="self-start font-semibold">Name:</label>
        <input type="text" className="rounded-xl focus:outline-none px-3 p-2 w-full" placeholder="Enter your name"  required/>
        <label className="self-start font-semibold">Email:</label>
        <input type="email" className="rounded-xl focus:outline-none px-3 p-2 w-full" placeholder="Enter your email"    required/>
        <label className="self-start font-semibold">Password:</label>
        <input type="password"  className="rounded-xl focus:outline-none px-3 p-2 w-full" placeholder="Enter the password"   required/>
        <button type="submit" className="bg-gradient-to-r from-green-500 to-green-400 text-white text-white rounded-xl hover:bg-[#059669] w-full mt-3 shadow-md">Sign up</button>
        <p className="font-medium text-sm">You already have an account?  <span className="font-semibold text-primary cursor-pointer">Sing in</span></p>
    </form>
   </div>
     </div>
 </>)
}
export default  SignupPage;