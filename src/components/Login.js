import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);

  }



  return (
    <div>
      <Header/>
      <div  className=" flex flex-col justify-center items-center bg-netflix-background bg-cover  h-screen">
        
        <div className='w-3/12 ' >
          <form className='bg-black text-white bg-opacity-80 p-10 rounded-lg'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
            {
              !isSignInForm && <input type="text" placeholder='Full Name'  className='p-4 m-2 mb-4 w-full bg-gray-700 rounded-lg' />
            }
            <input type="email" placeholder='Email Address'  className='p-4 m-2 mb-4 w-full bg-gray-700 rounded-lg' />
            <input type="password" placeholder='Password' className='p-4 m-2 mb-4 w-full bg-gray-700 rounded-lg' />
             <button className='p-4 m-2 bg-red-700 rounded-lg w-full mb-4'>{isSignInForm ? "Sign In": "Sign Up"}</button>
             <p  onClick={toggleSignInForm} className='cursor-pointer'>
             {isSignInForm ? "New to Netflix? Sign Up now": "Already registered? Sign In"}
             
              </p>
         </form>
      </div>

        </div>
      
      
    </div>
  )
}

export default Login
