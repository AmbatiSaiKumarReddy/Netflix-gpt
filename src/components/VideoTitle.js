import React, { useEffect } from 'react'



const VideoTitle = ({title,overview}) => { 
  useEffect(()=>{


  },[])



  return (

      <div className='w-1/3 left-25 absolute top-1/3 bg-transparent text-white p-4 pointer-events-none z-10'>
      <h1 className= 'font-bold p-2 text-6xl'>{title}</h1>
      <p className='p-2 font-semibold font-sans'>{overview}</p>

      <div>
        <button className='bg-white text-black font-extrabold py-2 px-4 mx-4 rounded-lg cursor-pointer hover:bg-gray-500 '>▶️   Play</button>
        <button className='bg-gray-400 py-2 px-4 mx-4 rounded-lg cursor-pointer'>ℹ  More Info</button>
      </div>

      </div>
      
  )
}

export default VideoTitle;
