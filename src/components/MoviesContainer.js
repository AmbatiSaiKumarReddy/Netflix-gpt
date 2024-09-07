import React from 'react'
import MovieCard from './MovieCard'

import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { addUpcomingMovies } from '../utils/moviesSlice';


const MoviesContainer = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const nowPlayingMovies=useSelector((store=>store.movies.nowPlayingMovies));
    const popularMovies=useSelector((store=>store.movies.popularMovies));
    const topRatedMovies=useSelector((store=>store.movies.topRatedMovies));
    const upComingMovies=useSelector((store=>store.movies.upComingMovies))

    if (nowPlayingMovies===null) return;
    if (topRatedMovies===null) return;
    if (popularMovies===null) return;
    if (upComingMovies===null) return;

  return (
    <div className='bg-black text-white px-5 '>

       <h1 className=''>Now Playing</h1>
       <div className='flex overflow-x-scroll no-scrollbar '>
       {
        nowPlayingMovies.map((movie)=><MovieCard movieId={movie.id} backdrop_path={movie.backdrop_path}/>)
       }

       </div>

       <h1>Popular Movies</h1>
       <div className='flex overflow-x-scroll no-scrollbar'>
       {
        popularMovies.map((movie)=><MovieCard movieId={movie.id} backdrop_path={movie.backdrop_path}/>)
       }

       </div>
       <h1>Top Rated Movies</h1>
       <div className='flex overflow-x-scroll no-scrollbar'>
       {
        topRatedMovies.map((movie)=><MovieCard movieId={movie.id} backdrop_path={movie.backdrop_path}/>)
       }

       </div>
       <h1>Upcoming Movies</h1>
       <div className='flex overflow-x-scroll no-scrollbar'>
       {
        upComingMovies.map((movie)=><MovieCard movieId={movie.id} backdrop_path={movie.backdrop_path}/>)
       }

       </div>
       
       

      
    {
        
    }

      
    </div>
  )
}

export default MoviesContainer
