import React, { useRef, useState } from 'react'
import Header from './Header'
import validate from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { PROFILE_LOGO } from '../utils/constants';

const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const email=useRef(null);
  const password=useRef(null) ;
  const fullName=useRef("");

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

    const handleButtonClick=()=> {

      //Firstly,Validate the data
      const message=validate(email.current.value,password.current.value);
      setErrorMessage(message);

      if(message!==null) return;

      //Sign In Logic
      if(isSignInForm){
      signInWithEmailAndPassword(auth,email.current.value,password.current.value).then(
        (userCredential)=>{
          const user=userCredential.user;
          //console.log(user);

          navigate("/browse");
        }
      ).catch((error)=>{
        console.log(error);
        const errorCode=error.code;
        const errorMsg=error.errorMessage
        console.log(errorMsg);
        setErrorMessage(errorMsg);
    
      })}

      //Sign Up Logic
      if(!isSignInForm){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value).then(
        (userCredential)=>{
          const user=userCredential.user
          //console.log(user);
          updateProfile(auth.currentUser,{
            displayName:fullName.current.value,
            photoURL:PROFILE_LOGO

          }).then(()=>{
            const updatedUser=auth.currentUser;
            //console.log(updatedUser.displayName);
            console.log(updatedUser);

            const {uid,email,displayName,photoURL}=updatedUser
            dispatch(
              addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              })
            )

          })
          navigate("/browse");
        }
      )
      .catch((error)=>{
        const errorCode=error.code;
        
        const errorMessage=error.message;

        setErrorMessage(errorMessage);
      })
    }

      

    }
  



  return (
    <div>
      <Header/>
      <div  className=" flex flex-col justify-center items-center bg-netflix-background bg-cover  h-screen">
        
        <div className='w-3/12 ' >
          <form  onSubmit={(e)=>e.preventDefault()} className='bg-black text-white bg-opacity-80 p-10 rounded-lg'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
            {
              !isSignInForm && <input type="text" ref={fullName} placeholder='Full Name'  className='p-4 m-2 mb-4 w-full bg-gray-700 rounded-lg' />
            }
            <input ref={email} type="email" placeholder='Email Address'  className='p-4 m-2 mb-4 w-full bg-gray-700 rounded-lg' />
            <input ref={password} type="password" placeholder='Password' className='p-4 m-2 mb-4 w-full bg-gray-700 rounded-lg' />
            <p className='text-red-600 mb-4'>{errorMessage}</p>
             <button
              className='p-4 m-2 bg-red-700 rounded-lg w-full mb-4'
              onClick={handleButtonClick}
              
              >{isSignInForm ? "Sign In": "Sign Up"}</button>

              {errorMessage && <p>{errorMessage}</p>}

             <p  onClick={toggleSignInForm} className='cursor-pointer hover:underline'>

             {isSignInForm ? "New to Netflix? Sign Up ": "Already registered? Sign In"}
             
              </p>
         </form>
      </div>

        </div>
      
      
    </div>
  )
}

export default Login
