import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux'

function leftside() {
    const user = useSelector((state)=>state.user.user)
  return (
    <div className='Container-left'>
        <div className='text-center overflow-hidden bg-white rounded-md mb-2 leftcard'>
            <div className='user-info border-b-2 border-solid '>
                <div className='card-background bg-center '></div>
                <a >
                    <div className='photo'></div>
                    {/* {
                    
                    console.log("username",user)} */}
                    <div className='link'>Welcome, {(user)?(user.displayName):("there")}!</div>
                </a>
                <a>
                    <div className='addphoto-text font-bold mb-5'> Add a Photo</div>
                    
                </a>

            </div>
            <div className='widgets py-3 border-b-2 border-solid'>
                <a className='flex items-center justify-between hover:bg-gray-200 py-1 px-3'>
                    <div className='flex flex-col text-left text-xs '>
                    <span className='text-joincolor'>Connections</span>
                    <span>Grow your Network</span>
                    </div>
                    <img src="src/assets/widget-icon.svg" alt=""  />
                </a>

            </div>
            <a className='item'>
                <span className='flex p-3 text-xs hover:bg-gray-200'>
                    <img src="src/assets/item-icon.svg" alt=""  />
                    My Items
                </span>
            </a>
        
        </div>
        <div className='communitycard text-xs   pt-2 bg-white rounded-md'>
            <div className=" flex flex-col px-3 py-1 leading-6 border-b-2 border-solid text-left" >
                <a>
                    <span className='text-lightblue hover:underline font-bold'>Groups</span>
                </a>
                <a className='flex items-center justify-between'>
                    <span className=' text-lightblue hover:underline font-bold'>Events</span>
                    <img src="src/assets/plus-icon.svg" alt="" className='img' />
                </a>
                <a>
                    <span className='text-lightblue hover:underline font-bold'>Followed Hashtags</span>
                </a>

            </div>
            <div className='px-3 py-2 text-joincolor text-center hover:bg-gray-200'>
                <span >Discover more</span>
            </div>
        </div>
    </div>
  )
}

export default leftside