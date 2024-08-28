import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from 'axios';
import { useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignupPage = ()=>{
  const nav = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState(null);
  const  [error, setError] = useState(null);
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

const userRegistration = async(e)=>{
  e.preventDefault();
  try{
    const response = await axios.post('http://localhost:8080/api/signup', userData);
    console.log(response.data);
    setMessage(response.data.message);
    notifySuccess(response.data.message);
    setTimeout(() => {
        nav('/signin')
    }, 3000);
  
  }catch(error){
    if (error.response) {
      console.log('Error response data:', error.response.data);
      setError(error.response.data.message); 
        notifyError(error.response.data.message);
  } else {
      console.log('Error message:', error.message);
       setError(error.message);
        notifyError(error.message);
  }
  }
}

 return(<>
    <div className="w-screen  fixed top-0 right-0 left-0 px-2 overflow-y-auto scroll-smooth h-screen bg-radial-gradient bg-cover flex flex-col font-sans"  style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F4F6',
    backgroundImage: 'radial-gradient(rgba(30, 58, 138, 0.299) 2px, transparent 0)',
    backgroundSize: '30px 30px',
    backgroundPosition: '-5px -5px',
  }}>
    <div className="z-10 fixed w-full right-0 left-0">
     <NavBar/>    
    </div>
    <div className="flex flex-col gap-2 justify-center items-center w-full h-full ">
        <h2 className="font-semibold text-2xl ">Sign Up</h2>
    <form action="" className=" flex flex-col w-1/3  items-center justify-center gap-3 p-2" onSubmit={userRegistration}>
        <label className="self-start font-semibold">Name:</label>
        <input type="text" className="rounded-xl focus:outline-none px-3 p-2 w-full" placeholder="Enter your name" onChange={(e)=>setUserData({...userData, name: e.target.value})}  />
        <label className="self-start font-semibold">Email:</label>
        <input type="email" className="rounded-xl focus:outline-none px-3 p-2 w-full" placeholder="Enter your email" onChange={(e)=>setUserData({...userData, email: e.target.value})}   />
        <label className="self-start font-semibold">Password:</label>
        <input type="password"  className="rounded-xl focus:outline-none px-3 p-2 w-full" placeholder="Enter the password" onChange={(e)=>setUserData({...userData, password: e.target.value})}  />
        <button type="submit" className="bg-gradient-to-r from-green-500 to-green-400 text-white text-white rounded-xl hover:bg-[#059669] w-full mt-3 shadow-md hover:bg-gradient-to-r hover:from-green-600 hover:to-green-500 focus:outline-none">Sign up</button>
        <p className="font-medium text-sm">You already have an account?  <span onClick={()=>nav('/signin')} className="font-semibold text-primary cursor-pointer hover:underline">Sing in</span></p>
    </form>
    {error && (<p className="text-error text-lg">
      {error}
    </p>)}
   </div>
     </div>
     <ToastContainer position="top-center" transition={Bounce}/>
 </>)
}
export default  SignupPage;