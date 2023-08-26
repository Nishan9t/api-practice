import React from 'react'

export default function Comment({sec,allComments}) {
    
    
  return (
    <div>
    {
        allComments.map((com,id)=>{
            if(com.secretId==sec._id)
            {
                return(
                <div key={id}>{com.message}</div>
            )

            }
           
        })
    }

    </div>
  )
}
