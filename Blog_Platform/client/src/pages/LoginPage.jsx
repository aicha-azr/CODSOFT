import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { ArrowLeft } from "lucide-react";

const LoginPage = ()=>{
    const nav = useNavigate();
    const [userData, setUserData] = useState({
      email: '',
      password: ''
    })
    const [message, setMessage] = useState(null);
    const  [error, setError] = useState(null);
    const notifySuccess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);
    const userLogin = async(e)=>{
      e.preventDefault();
      try{
        const response = await axios.post('http://localhost:8080/api/login', userData,
          { withCredentials: true });
        console.log(response.data);
        setMessage(response.data.message);
        notifySuccess(response.data.message);
        setTimeout(() => {
            nav('/home')
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
    <div className="flex flex-col gap-2 justify-center items-center w-full h-full relative ">
        <h2 className="font-semibold text-2xl ">Sign in</h2>
    <form action="" className=" flex flex-col w-1/3  items-center justify-center gap-3 p-2" onSubmit={userLogin}>
        <label className="self-start font-semibold">Email:</label>
        <input type="email" className="rounded-xl focus:outline-none px-3 p-2 w-full" placeholder="Enter your email" onChange={(e)=>setUserData({...userData, email: e.target.value})}   required/>
        <label className="self-start font-semibold">Password:</label>
        <input type="password"  className="rounded-xl focus:outline-none px-3 p-2 w-full" placeholder="Enter your password"  onChange={(e)=>setUserData({...userData, password: e.target.value})}   />
        <button type="submit" className="bg-gradient-to-r from-green-500 to-green-400 text-white text-white rounded-xl hover:bg-[#059669] w-full mt-3 shadow-md hover:bg-gradient-to-r hover:from-green-600 hover:to-green-500 focus:outline-none">Sign in</button>
        <p className="font-medium text-sm">You don't have an account?  <span className="font-semibold text-primary cursor-pointer hover:underline" onClick={()=>nav('/signup')}>Sing up</span></p>
    </form>
    <div className="absolute left-1 top-11 mt-10 font-bold bg-white rounded-full p-1 shadow-light shadow-md text-textPrimary" onClick={() => nav('/')}>
              <ArrowLeft />
            </div>
   </div>
     </div>
     <ToastContainer position="top-center" transition={Bounce}/>

 </>)
}
export default  LoginPage;