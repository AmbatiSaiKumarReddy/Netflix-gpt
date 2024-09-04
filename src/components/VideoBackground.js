import React from 'react'

import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  useMovieTrailer(movieId)
  
const videoDetails=useSelector((store)=>store.movies.trailerVideo);
if(videoDetails===null) return;

  return (
    <div>
      <iframe 
        className='w-full  h-full absolute aspect-video'
       src={"https://www.youtube.com/embed/"+videoDetails?.key+"?&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin" 
       allowFullScreen>

       </iframe>
    </div>
  )
}

export default VideoBackground;
