import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate=useNavigate();

    

const [user,setUser]=useState({
    email:'',
    password:'',
});

const handleSubmit=async(e)=>{
    e.preventDefault();

    try{
        const res=await axios.post('http://localhost:8000/login',{...user});
        localStorage.setItem("token",res.data.data);
        window.location='/'
       
       

    }
    catch(error)
    {
        console.log(error)
    }
   
}


  return (
//   <!-- component -->
<div className="bg-black-100 min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center  justify-center px-2">
                <form className="bg-white px-6 py-8 rounded shadow-md bg-gray-500 text-black w-full" onSubmit={(e)=>{handleSubmit(e)}}>
                    <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                    
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}
                        />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}
                         />
                   

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Log In
                    </button>

                </form>

                <div className="text-grey-dark mt-6">
                    Don't have an account? 
                    <Link className="no-underline border-b border-blue ml-4 text-blue-500" to="/signup">
                        SignUp
                    </Link>.
                </div>
            </div>
        </div>
  )
}
