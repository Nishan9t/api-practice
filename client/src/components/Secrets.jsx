import axios from 'axios';
import React, { useState } from 'react'

export default function Secrets({secrets}) {

    const [comment,setComment]=useState({
      message:'',
      secretId:''
    })

    const [allComments,setAllComments] =useState([]);

    const handleComment=async(id)=>{
      try{

        const res =await axios.post('http://localhost:8000/comment',{...comment,secretId:id});
        setComment("");
        console.log("comment added")

      }
      catch(error){
        console.log(error);

      }
    }

    const getComments=async(id)=>{
      try{
        await axios.get(`http://localhost:8000/allcomments/`+id)
        .then((response)=>{
          setAllComments(response.data.data);
          console.log(allComments)
        })
      }
      catch(error)
      {
        console.log(error);
      }

    }

    // const useEffect(()=>{
    //   getComments(id);
    // },[allComments])

  return (
    <div>
        <h1 className='text-center mx-auto font-bold text-3xl m-16'>SECRETS ARE HERE</h1>
     {
            secrets.map(((sec,ind)=>{
             
             
              return(
                <div key={ind} className='mx-auto my-2 max-w-7xl sm:px-6 lg:px-8 '>
                    <div  className='border w-full mb-2 rounded'>
                        <div className=' px-2 m-4'>
                          
                            {sec.text}
                        </div>
                        <div className='flex flex-row justify-end'>
                            <textarea
                            className="border w-1/2 mb-2 rounded "
                            placeholder="Enter your text here"
                            name='message'
                            onChange={(e)=>{setComment({...comment,[e.target.name]:e.target.value})}}
                            required
                            />

                            <button
                                type='submit'
                                className="text-center mb-2 px-2 rounded bg-green-500 text-white hover:bg-green-dark hover:bg-green-700"
                                onClick={()=>{handleComment(sec._id)}}
                            >
                            Post
                            </button>
                            <div className='comments'>
                               <button onClick={()=>{getComments(sec._id)}}>Get comments</button>
                            </div>
                        </div>
                    </div>
                </div>
              )
            }))
          }
    </div>
  )
}
