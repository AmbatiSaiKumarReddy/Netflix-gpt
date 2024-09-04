import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
 // console.log(movies);

  if(movies===null) return;
  const mainMovie=movies[0];
  const {original_title,overview,id}=mainMovie;
 //console.log("------"+movies[0].original_title);
  


  return (
    <div  className='relative h-screen'>
      
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
