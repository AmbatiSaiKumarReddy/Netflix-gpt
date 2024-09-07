import React, { useState, useEffect } from 'react';

const VideoPlayer = ({videoDetails}) => {
    return(
    <iframe 
    className='w-full  aspect-video border-0 '
   src={"https://www.youtube.com/embed/"+videoDetails?.key+"?&autoplay=1&mute=1&showInfo=0&controls=0&modestbranding=1&rel=0"}
   title="YouTube video player" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
   referrerPolicy="strict-origin-when-cross-origin"
   
   allowFullScreen>

   </iframe>)
};

export default VideoPlayer;
