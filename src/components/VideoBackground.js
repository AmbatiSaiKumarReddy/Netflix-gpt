import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';


import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import VideoPlayer from './VideoPlayer';

const VideoBackground = ({movieId}) => {

  useMovieTrailer(movieId)
  
const videoDetails=useSelector((store)=>store.movies.trailerVideo);
if(videoDetails===null) return;

  return (
    <div className='w-full '>

      {/* <iframe 
        className='w-full  aspect-video border-0 '
       src={"https://www.youtube.com/embed/"+videoDetails?.key+"?&autoplay=1&mute=1&showInfo=0&controls=0&modestbranding=1&rel=0"}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin"
       
       allowFullScreen>

       </iframe> */}

    {/* <div className="video-player">
      <Plyr type="youtube" videoId={"https://www.youtube.com/embed/"+videoDetails?.key+"?&autoplay=1&mute=1&showInfo=0&controls=0&modestbranding=1&rel=0}"}/>
    </div> */}

    {/* <div className="video-player">
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: "https://www.youtube.com/embed/"+videoDetails?.key,
              provider: "youtube",
            },
          ],
        }}
        options={{
          controls: ['mute'],  // Only show the mute button
          autoplay: true,      // Enable autoplay
          muted: true,         // Start muted
        }} */}

      {/* />
    </div> */}
    <VideoPlayer videoDetails={videoDetails} />



    </div>
  )
}

export default VideoBackground;
