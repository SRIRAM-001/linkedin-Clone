import React from 'react';
import { signinAPI } from '../actions.js';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { ordered } from '../Reducer/userSlice.js';




function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user.user)
  

  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("clicked");
    navigate('/home', { replace: true });
  };

  

  
  
  
  
  return (

    
    <div className='flex flex-col'> 
    {
      user&&navigate('/home', { replace: true })
    }
    
      {/*  navbar section  start*/}
            <nav className='flex items-center flex-row justify-between flex-nowrap relative m-0 pl-3 bg-white'>
                <img className="h-16 w-32 sm:ml-16 "src='src/assets/linkedinlogo.png'></img>
                <div className='pr-6 flex items-center'>
                  
                    <h2  className='text-joincolor hover:bg-gray-200 hover:text-stone-700 text-base rounded transition duration-300 ease-in-out p-2'>Join now</h2>
                    <h2  className='ml-7 px-5 py-1 rounded-3xl border-2 border-solid border-signincolor text-signincolor hover:bg-signinhover text-base font-light shadow-inner transition duration-300'>Sign in</h2>
                </div>
            </nav>
      {/* navbar section end */}
      {/* hero section start */}
            <div className='pt-14 pb-10 p-2 sm:pt-14 sm:pl-10 sm:p-8 min-h-0 w-full  sm:max-w-1128 sm:min-h-700 m-auto flex  flex-col   md:flex-start relative flex-wrap '>
                <h1 className='w-full lg:text-left lg:w-2/3 lg:pl-10 lg:pt-6 text-xl sm:text-4xl text-lightblue lg:text-6xl font-extralight leading-tight lg:leading-snug text-center'>Welcome to your professional Community</h1>
                <img src='src/assets/login-hero.svg' className='lg:my-8 mt-12 h-96 lg:h-96 sm:mt-8 lg:absolute lg:right-8 lg:top-32'></img>
            </div>
      {/* hero section end */}
      {/* google sign in section start */}
          <button onClick={()=>{dispatch(signinAPI())}} className='sm:w-gsignwidth w-full phone:self-center lg:relative lg:left-36 lg:top-12  flex flex-row rounded-full align-middle border-black  border-2 items-center justify-center  h-12  mb-5  mx-1 text-xl  hover:bg-gsignin hover:text-slate-700'>
            
            <img src='src/assets/google.svg'></img>
            <h1 className='text-joincolor mx-2'>Sign in with google</h1>
            
            
          </button>
          
          
          
      {/* google sign in section start */}
       
    </div>
  )
}

export default Login