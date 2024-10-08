
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'




const Browse = () => {

  useNowPlayingMovies()

  return (
    <div className='bg-black h-screen '>

     <Header/>
     {/* 
        - Main Container
          -Video Background
          -Video Title and Description 
        
        -Secondary Container
          -Movies*n

     */}
     <MainContainer/>
     <SecondaryContainer/>
      
     
    
    
    </div>
   
  )
}

export default Browse
