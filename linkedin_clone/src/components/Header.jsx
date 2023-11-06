import React from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { signOutAPI } from '../actions.js'
import { useNavigate } from 'react-router-dom'

function Header() {
    const user = useSelector((state)=>state.user.user)
    const dispatch =useDispatch();
    const navigate= useNavigate();

   
    
  return (
    <div >
        
        <div  id='container' className='bg-white px-0 pl-3 py-1 sm:pl-16 fixed border-b-2 top-0 left-0 w-full'>
            <div id='Content' className='flex items-center mx-0 my-auto max-w-7xl'>
                <img src="src/assets/linkedin.png" alt="" className='mr-2 h-7 small:h-9' />
                <div id='search'className=' relative opacity-100 grow-0 head:py-2'>
                    <div className='max-w-mw'>
                        <input type="text" placeholder='Search' className='border-0  bg-searchbarcolor leading-7 pl-9  pr-16 h-7   font-normal text-sm ' />
                    </div>
                    <img src="src/assets/search-icon.svg" alt="" className='absolute w-4 top-3.5 lg:top-1.5 left-3 pointer-events-none flex justify-center items-center'/>
                </div>
                <nav className='ml-auto block small:fixed small:left-0 small:bottom-0  small:w-full small:py-2 mr-10 bg-white'>

                    <ul id='navwraplist' className='flex flex-nowrap justify-between sm:items-center list-none  small:mx-2'>

                        <li id='navlist' className=' flex items-center justify-center active  ' >
                            <a className='flex items-center  bg-transparent flex-col text-xs relative min-h-42 min-w-80'>
                                <img src="src/assets/nav-home.svg" alt="" />
                                <span className='text-joincolor  hover:text-stone-700 text-center active:text-stone-700 span-active small:hidden head:hidden'>Home</span>
                            </a>
                        </li>
                        <li id='navlist' className=' flex items-center justify-center sm:mx-5'>
                            <a className='flex items-center  bg-transparent flex-col text-xs sm:leading-none relative min-h-42 min-w-80'>
                                <img src="src/assets/nav-network.svg" alt="" />
                                <span className='text-joincolor  hover:text-stone-700 active:text-stone-700 small:hidden head:hidden'>My Network</span>
                            </a>
                        </li>
                        <li id='navlist' className=' flex items-center justify-center sm:mx-5'>
                            <a className='flex items-center  bg-transparent flex-col text-xs relative min-h-42 min-w-80'>
                                <img src="src/assets/nav-jobs.svg" alt="" />
                                <span className='text-joincolor  hover:text-stone-700 active:text-stone-700 small:hidden head:hidden'>Jobs</span>
                            </a>
                        </li>
                        <li id='navlist' className=' flex items-center justify-center sm:mx-5'>
                            <a className='flex items-center  bg-transparent flex-col text-xs relative min-h-42 min-w-80'>
                                <img src="src/assets/nav-messaging.svg" alt="" />
                                <span className='text-joincolor  hover:text-stone-700 active:text-stone-700 small:hidden head:hidden'>Messaging</span>
                            </a>
                        </li>
                        <li id='navlist' className=' flex items-center justify-center  sm:mx-5'>
                            <a className='flex items-center  bg-transparent flex-col text-xs relative min-h-42 min-w-80'>
                                <img src="src/assets/nav-notifications.svg" alt="" />
                                <span className='text-joincolor  hover:text-stone-700 active:text-stone-700 small:hidden head:hidden'>Notifications</span>
                            </a>
                        </li>
                        <li className=' flex items-center  justify-center user '>
                        <div onClick={()=>{dispatch(signOutAPI())}} id='user' className='sm:mx-4  '>
                        <a className=' text-xs '>
                            {
                                (user&&user.photoURL)?(
                                    <img src={user.photoURL} className='rounded-full h-6 w-6'/>

                                ):(
                                <img src="src/assets/user.svg" alt="" className='rounded-full h-6 w-6'/>)
                                
                            }
                            
                            <span className='flex justify-center items-center small:hidden head:hidden'>Me
                            <img src="src/assets/down-icon.svg" alt="" className='min-h-3 min-w-3'/>
                            </span>
                            
                        </a>
                        </div>
                        <div className='absolute top-9 signout bg-white text-center h-9 w-16 text-xs  duration-100 ease-in-out  rounded-md '>
                            <a>Sign Out</a>
                         </div>
                        </li>
                        <li>
                        <div id='work' className='border-l-2 sm:pl-8'>
                        <a className='  text-xs '>
                            <img src="src/assets/nav-work.svg" alt="" />
                            <span className='flex justify-center items-center small:hidden head:hidden'>Work
                            <img src="src/assets/down-icon.svg" alt="" className='min-h-3 min-w-3' />
                            </span>
                            
                        </a>

                         </div>
                         </li>
                    </ul>
                   
                    
                </nav>
            </div>
           

        </div>
        

    </div>
  )
}


export default Header