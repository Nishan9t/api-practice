import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function HomePage() {

  const [text,setText] = useState('');
  const [secrets,setSecrets]=useState([]);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    
    try{
      const res=await axios.post('http://localhost:8000/secret',{text});

    }
    catch(error)
    {
      console.log(error);
    }
  }

  const getSecrets=async()=>{
    try{
      const response =await axios.get('http://localhost:8000/')
      if(response.data.success)
      {
        setSecrets(response.data.data);
        console.log(secrets);
      }
    }
    catch(error)
    {
      console.log(error);
    }

  }

useEffect(()=>{
 
  getSecrets();

},[])
  
  return (
   
  
          <div className="p-4">
          <h1 className='text-center mx-auto font-bold text-3xl m-16'>SECRETS:- that's no one knows</h1>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <textarea
              className="border p-2 w-full mb-2 rounded "
              placeholder="Enter your text here"
              value={text}
              onChange={(e)=>{setText(e.target.value)}}
              required
            />
            <button
              type='submit'
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              
            >
              Submit
            </button>
          </form>
        </div>
      
   

  )
}
