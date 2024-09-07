import React, { useEffect } from 'react'

const MovieCard = ({movieId,backdrop_path}) => {



    // useEffect(()=>{
    //     fetchMoviePhoto();
    // },[])

    // const fetchMoviePhoto=async()=>{
    //     const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/images");
    //     const json=await data.json();
    //     console.log(json);
    // }
  return (
    <div className=' bg-yellow-200 m-4'>
        <div className='w-40'>
        <img  src={"https://image.tmdb.org/t/p/w200/"+backdrop_path}/>
        </div>
        
        
        
        
    </div>
  )
}

export default MovieCard
