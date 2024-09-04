import { signOut } from 'firebase/auth'
import React,{useEffect} from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser,removeUser } from '../utils/userSlice'
import { IMG_LOGO } from '../utils/constants'


const Header = () => {
  
 const user= useSelector((store)=>store.user);
 const dispatch=useDispatch();
 const navigate=useNavigate();

useEffect(()=>{

  const unsubscribe=onAuthStateChanged(auth,(user)=>{
    if(user){
      const{uid,email,displayName}=user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
       navigate("/browse")

    }
    else{
      dispatch(removeUser());
      navigate("/")

    }

    return unsubscribe();

  })

},[])

  const signOutHandler=()=>{
    signOut(auth).then(()=>{
      navigate("/");
    })
    .catch((error)=>{
      navigate("/error");
    })
  }
  return (
    <div className="flex justify-between fixed z-50 w-full ">
     <div className='bg-gradient-to-b from-black  m-4' >
      <img  className='w-44'
        src={IMG_LOGO}
        alt="logo"/>
     </div>

    {
      user && <div className='flex justify-center items-center'>
        <h1>{user.displayName}</h1>
        <img  className="w-20" src={user.photoURL} alt='profile-emoji'/>
      <button   onClick={signOutHandler} className='bg-green-600  p-2  m-2 font-bold border-r-slate-950 cursor-pointer rounded-lg'>Sign Out</button>
      </div>
    }
    
   

    </div>
    
    
  )
}

export default Header
