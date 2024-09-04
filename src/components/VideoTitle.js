import React, { useEffect } from 'react'



const VideoTitle = ({title,overview}) => { 
  useEffect(()=>{


  },[])



  return (
    <div className='bg-black w-screen pt-[24%] absolute inset-0 z-20  pointer-events-none text-white p-4 absolute opacity-70'  >
      <div className='w-1/3'>
      <h1 className= 'font-bold p-2 text-4xl'>{title}</h1>
      <p className='p-2'>{overview}</p>

      <div>
        <button className='bg-gray-400 py-2 px-4 mx-4 rounded-lg cursor-pointer'>▶️ Play</button>
        <button className='bg-gray-400 py-2 px-4 mx-4 rounded-lg cursor-pointer'>ℹ  More Info</button>
      </div>

      </div>
      
    </div>
  )
}

export default VideoTitle;
