import React from 'react'

export default function Secrets({secrets}) {
  return (
    <div>
        <h1 className='text-center mx-auto font-bold text-3xl m-16'>SECRETS ARE HERE</h1>
     {
            secrets.map(((sec,ind)=>{
              return(
                <div key={ind} className='mx-auto my-2 max-w-7xl sm:px-6 lg:px-8 '>
                    <div  className='border w-full mb-2 rounded'>
                        <div className=' px-2'>
                            {sec.text}
                        </div>
                        {/* <div className='flex flex-row'>
                            <textarea
                            className="border p-2 w-1/2 mb-2 rounded "
                            placeholder="Enter your text here"
                            // value={}
                            // onChange={}
                            required
                            />

                            <button
                                type='submit'
                                className="text-center mb-2 px-4 rounded bg-green-500 text-white hover:bg-green-dark hover:bg-green-700"
                                
                            >
                            Post
                            </button>
                        </div> */}
                    </div>
                </div>
              )
            }))
          }
    </div>
  )
}
