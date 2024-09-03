import axios from "axios";
import { useState } from "react";

const Test =()=>{
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [clientData, setClientData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        cin: '',
        email: '',
        password: ''
    })
    const [clientId, setClinetId] = useState('');
    const [token, setToken] = useState(null);
    const auth = async()=>{
        try{
            const response = await axios.post('https://valetclub-api.onrender.com/api/v1/auth/adminLogin', userData);
            console.log(response.data)
            console.log(response.data.access_token)
            setToken(response.data.access_token)
            localStorage.setItem('token', response.data.access_token);
        }catch(e){
            console.log('error:', e);
        }
    }
    const deleteClient = async ()=>{
        try{
            const response = await axios.delete(`https://valetclub-api.onrender.com/api/v1/clients/${clientId}`)
            console.log(response.data)
        }catch(e){
            console.log('error:', e)
        }
    }
    const addClient = async()=>{
        try{
            const response = await axios.post('https://valetclub-api.onrender.com/api/v1/clients', clientData);
            console.log(response.data);
        }catch(e){
            console.log('error:',e)
        }
    }
    return(
        <>
        <div className="flex gap-2">
        <div className="flex flex-col border shadow-md p-2 gap-2 rounded-md h-fit ">
            <h2 className="font-bold">Authentication:</h2>
            <div className="flex flex-col">
                <label htmlFor="email" className="self-start font-bold">Email:</label>
                <input type="email" placeholder="enter your email" className="p-2" onChange={(e)=>setUserData({...userData, email: e.target.value})} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="self-start font-bold">password:</label>
                <input type="password" placeholder="enter your password"  className="p-2" onChange={(e)=>setUserData({...userData, password: e.target.value})}/>
            </div>
            <button className="rounded-xl bg-green-200" onClick={auth}>Login</button>
        </div>





        <div className="flex flex-col border shadow-md p-2 gap-2 rounded-md ">
        <h2 className="font-bold">Add client:</h2>
<div className="flex gap-2">
            <div className="flex flex-col items-center gap-2">
                <label htmlFor="text" className="self-start font-bold">First name:</label>
                <input type="text" placeholder="enter your first name" className="p-2" onChange={(e)=>setClientData({
                    ...clientData, firstName: e.target.value
                })}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="text" className="self-start font-bold">Last name:</label>
                <input type="text" placeholder="enter your last name" className="p-2" onChange={(e)=>setClientData({
                    ...clientData, lastName: e.target.value
                })}/>
            </div>
            </div>
            <div className="flex gap-2">
            <div className="flex flex-col items-center gap-2">
                <label htmlFor="text" className="self-start font-bold">Phone:</label>
                <input type="number" placeholder="enter your Phone number" className="p-2" onChange={(e)=>setClientData({
                    ...clientData, phone: e.target.value
                })}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="text" className="self-start font-bold">CIN:</label>
                <input type="text" placeholder="enter your CIN" className="p-2" onChange={(e)=>setClientData({
                    ...clientData, cin: e.target.value
                })}/>
            </div>
            </div>
            <div className="flex gap-2 ">
            <div className="flex flex-col items-center gap-2">
                <label htmlFor="email" className="self-start font-bold">Email:</label>
                <input type="email" placeholder="enter your email" className="p-2" onChange={(e)=>setClientData({
                    ...clientData, email: e.target.value
                })} />
            </div>
            <div className="flex flex-col items-center gap-2">
                <label htmlFor="password" className="self-start font-bold">password:</label>
                <input type="password" placeholder="enter your password"  onChange={(e)=>setClientData({
                    ...clientData, password: e.target.value
                })}/>
            </div>
            </div>
            <button className="rounded-xl bg-yellow-200" onClick={addClient} >Add client</button>
        </div>

        <div className="flex flex-col border shadow-md p-2 gap-2 rounded-md h-fit">
        <h2 className="font-bold">Delete client:</h2>

            <div className="flex gap-2 flex-col">
                <label htmlFor="client" className="self-start font-bold">Client id:</label>
                <input type="text" name="client" placeholder="Enter the client Id" onChange={(e)=>setClinetId(e.target.value)}/>
            </div>
            <button className="bg-red-200 rounded-xl" onClick={deleteClient}>Delete</button>
        </div>
        </div>
        </>
    )
}

export default Test;