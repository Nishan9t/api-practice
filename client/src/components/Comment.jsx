import React from 'react'

export default function Comment({sec,allComments,click,setClick}) {
    
    
  return (
    
    <div className='ml-4'>
    {
        allComments.map((com,id)=>{
            if(com.secretId==sec._id)
            {
                return(
                <div className='m-2 ' key={id}>{com.message}</div>
            )

            }
           
        })
    }

    </div>
   
  )
}
