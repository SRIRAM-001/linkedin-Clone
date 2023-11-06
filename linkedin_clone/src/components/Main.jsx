import React from 'react'
import { BiRepost,BiLike ,BiImage} from 'react-icons/bi'
import {RiVideoFill} from 'react-icons/ri'
import {IoIosSend} from 'react-icons/io'
import {FaRegCommentDots} from 'react-icons/fa'
import {FcCalendar} from 'react-icons/fc'
import {MdArticle} from 'react-icons/md'

import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import PostModal from './PostModal'
import { listALLAPI } from '../actions.js'
import ImageGallery from './post'



function main() {
  const [showModal,setShowmodal] = useState("close");
  const [reloadGallery, setReloadGallery] = useState(true);

  const user = useSelector((state)=>state.user.user)
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.data)
  const handleClick = (e) =>
  {
    
    e.preventDefault();
    // if(e.target !== e.currentTarget)
    //  return; 
     console.log("clicked",showModal);

    switch(showModal)
    {
      case "open":
        setShowmodal("close");
        break;
      case "close":
        setShowmodal("open");
        break;
      default:
        setShowmodal("close");
        break;
    }
    setReloadGallery(!reloadGallery)

  }
  
  return (
    <div className='Container-main '>
      <div className='commoncard bg-white overflow-hidden mb-2 rounded-md'>
        <div className='sharebox bg-white flex flex-col text-joincolor '>
          
          <div className='px-4 mt-4 flex w-full items-center justify-between'>
          {
                user&&user.photoURL?<img src={user.photoURL} alt="" className='h-12 w-12 mr-2 rounded-full'/>:
                <img src="src/assets/user.svg" alt="" className='h-12 w-12 mr-2 rounded-full'/>
              }
            
            <button className='p-4 border  border-gray-400 rounded-3xl w-full text-left text-joincolor   sharecard  bg-gray-100' onClick={handleClick}>Start a post</button>
          </div>

          <div className='px-4 flex  justify-between font-medium m-1'>
            <button className='flex items-center justify-center   hover:bg-gray-200 rounded-md px-2 py-3'>
              <BiImage className='mr-1 h-8 w-10 text-blue-500'/>
              <span className='sharecard text-zinc-600 '>Photo</span>
            </button>
            <button className='flex items-center justify-center text-xs   hover:bg-gray-200 rounded-md px-2 py-3'>
              <RiVideoFill className='mr-1 h-8 w-10 text-green-600'/>
              <span className='sharecard text-zinc-600'>Video</span>
            </button>
            <button className='flex items-center justify-center text-xs   hover:bg-gray-200 rounded-md px-2 py-3'>
              <FcCalendar className='mr-3 h-8 w-10'/>
              <span className='sharecard text-zinc-600'>Event</span>
            </button>
            <button className='flex items-center justify-center text-xs   hover:bg-gray-200 rounded-md px-2 py-3'>
              <MdArticle className='mr-3 h-8 w-10 text-red-500'/>
              <span className='sharecard text-zinc-600'>Write article</span>
            </button>
          </div>
        </div>
        
      </div>
      <div>
          {/* <div className='article rounded-md bg-white overflow-hidden '>
            <div className='sharedactor flex items-center justify-between my-2 px-4'>
              <a className='flex items-center justify-center '>
                <img src="src/assets/user.svg" alt="" className='h-10 w-10 mr-3'/>
                <div className='flex flex-col text-xs text-joincolor'>
                <span className='font-semibold'>Title</span>
                <span>Info</span>
                <span>Date</span>
                </div>
              </a>
              <button className=' self-start '>
                <img src="src/assets/dot.jpeg" alt=""  className='border-2 border-black h-2.5'/>
              </button>

            </div>
            <div className='description'>Description
            
            <div className='sharedimage w-full mt-2 p-1 '>
              <a className='w-full'>
                <img src="src/assets/posts.jpg" alt="" className='w-full h-64' />
              </a>
            </div>
            </div>
            <div className='socialcomments '>
            <ul className='w-full flex items-center justify-start px-4 py-1 pb-3 '>
              <li className='list-none'>
                <button className='flex items-center border-2 rounded'>
                  <img src="src/assets/like.png" alt="" className='h-6 w-6'/>
                  <img src="src/assets/like.png" alt="" className='h-6 w-6'/>
                  <span className='text-xs'>75</span>
                </button>
              </li>
              <li>
                <a className='text-xs'>2Comments</a>
              </li>
            </ul>
            </div>
            <div className='flex w-full justify-between px-10 my-4 reactions'>
              <button className='flex items-center small:mr-1'>
                <BiLike className='h-7 w-7 text-joincolor  small:h-5 small:w-5'/>
                <span className='ml-1 text-joincolor '>Like</span>
              </button>
              <button className='flex items-center small:mx-1'>
                <FaRegCommentDots className='h-7 w-7 text-joincolor small:h-5 small:w-5'/>
                <span className='ml-1 text-joincolor'>Comment</span>
              </button>
              <button className='flex items-center small:mx-1 '>
                {/* <BiRepost className='h-11 w-11 text-joincolor repost'/> 
                <img src="src/assets/repostpng.png" alt="" className='h-7 w-7 small:h-5 small:w-5'/>
                <span className='ml-1 text-joincolor'>Repost</span>
              </button>
              <button className='flex items-center small:ml-2'>
                <IoIosSend className='h-7 w-7 text-joincolor small:h-5 small:w-5'/>
                <span className='ml-1 text-joincolor'>Send</span>
              </button>

            </div>
          </div> */}
            <div>
              <>{
                
                showModal === 'close' &&
                <ImageGallery showModal={showModal} reloadGallery={reloadGallery}/>
                
              }
              </>
            
            </div>
        </div>
      
      <PostModal showModal={showModal} handleClick={handleClick}/>
    </div>
  )
}

export default main