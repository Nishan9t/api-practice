import React,{useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DataContext } from '../Context/DataProvider';

export default function Signup() {

    const navigate=useNavigate();
    const {user,setUser}=useContext(DataContext);

const [cus,setCus]=useState({
    name:'',
    email:'',
    password:'',
});

const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const res= await axios.post("http://localhost:8000/signup",{
            ...cus
        }
        );
        if(res){
            if(!res.errors)
            {
                console.log(res);
                // localStorage.setItem("token",res.data.data);
                // setUser({...user,username:res.data.user.name,email:res.data.user.email});
                navigate("/login")
                // window.location='/';
            }
           
        }

    }
    catch(error)
    {
        console.log(error);
    }
}


  return (
//   <!-- component -->
<div className="bg-black-100 min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center  justify-center px-2">
                <form className="bg-white px-6 py-8 rounded shadow-md bg-gray-500 text-black w-full" onSubmit={(e)=>{handleSubmit(e)}}>
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Full Name" 
                        onChange={(e)=>setCus({...cus,[e.target.name]:e.target.value})}
                        />
                        
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        onChange={(e)=>setCus({...cus,[e.target.name]:e.target.value})}
                        />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        onChange={(e)=>setCus({...cus,[e.target.name]:e.target.value})}
                         />
                   

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account
                    </button>

                </form>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue ml-4 text-blue-500" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
  )
}
