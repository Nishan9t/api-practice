import React, { useState } from 'react'
import axios from 'axios';

export default function HomePage() {

  const [text,setText] = useState('');

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
  
  return (
   
  
          <div className="p-4">
          <h1 className='text-center mx-auto font-bold text-3xl m-16'>SECRETS:- that's no one knows</h1>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <textarea
              className="border p-2 w-full mb-2 rounded "
              placeholder="Enter your text here"
              value={text}
              onChange={(e)=>{setText(e.target.value)}}
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
