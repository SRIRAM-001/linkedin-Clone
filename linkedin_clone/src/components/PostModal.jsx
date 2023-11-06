import React from 'react'
import {MdClose} from 'react-icons/md'
import {BiImage} from 'react-icons/bi'
//import {RiVideoFill} from 'react-icons/ri'
import {BsEmojiSmile} from 'react-icons/bs'
import {FcCalendar} from 'react-icons/fc'
import {IoIosVideocam} from 'react-icons/io'
import {FiClock} from 'react-icons/fi'

import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux' 
import { postImageAPI } from '../actions.js'

import '../App.css'

function PostModal(props) {
    const[editorText,seteditorText]= useState("")
    const [shareImage,setshareImage]=useState("")
    const [video,setVideo] = useState("")
    
    const user = useSelector((state)=>state.user.user)
    const dispatch = useDispatch();

    const handleimage = (e) =>
    {
        const image = e.target.files[0];
        if(image===""||image===undefined)
        {
            alert("not an image,This file is a ", typeof(image))
        }
        else
        setshareImage(image)
        console.log(shareImage.name);
    } 
    const handleVideo = (e) =>
    {
        const video = e.target.files[0];
        if(video===""||video===undefined)
        {
            alert("not a video,This file is a ", typeof(video))
        }
        else
        setVideo(video)
    } 
    const payload ={
       image:shareImage,
       user:user,
       description:editorText,
       //email:user.email
       //timestamp:firebase.firestore.Timestamp.now()
    }


    const reset = (e) =>{
        seteditorText("");
        setVideo("");
        setshareImage("")
        props.handleClick(e);
    }
  return (
    <>
    { props.showModal === "open" &&
    <div className='postmodal-container fixed top-0 left-0 bottom-0 right-0 z-50  '>
        <div className='post-content bg-white w-full max-h-full overflow-y-auto  rounded-md relative flex flex-col top-0 mb-56'>
            <div className='post-header flex justify-between  items-center px-4 py-4 border-b-2 text-base text-joincolor font-normal tracking-wide'>
                <h2>Create a post</h2>
                <div onClick={(event)=>reset(event)} className='post-close'>
                 <MdClose className='hover:bg-gray-300 rounded-full h-7 w-7 p-1'/>
                </div>
            </div>
            <div className='shared-content flex flex-col flex-grow  align-baseline px-2 py-3 bg-transparent' >
                <div className='user-info flex items-center px-3 py-6'>
                    {
                        user&&user.photoURL?(<img src={user.photoURL} alt="" className='h-12 w-12 rounded-full' />):<img src="src/assets/user.svg" alt="" className='h-12 w-12 rounded-full' />
                    }
                    
                    <span className='font-semibold text-base leading-normal ml-1.5'>{user.displayName} </span>
                </div>
            </div>
            <div className='px-5 h-36 '>
                <textarea value={editorText} 
                onChange={(e)=>seteditorText(e.target.value)}
                placeholder='What do you want to talk about?' 
                style={{ fontSize: '16px',padding:'15px',letterSpacing:'1.5px' }}
                className='h-full w-full resize-none text-area'>

                </textarea>
                
            </div>
            <div className='shared-creations flex flex-col justify-between p-3 border-b'>
                <div className='h-9 w-9 ml-4 mb-1 flex items-center justify-center rounded-full hover:bg-stone-200'>
                < BsEmojiSmile className='  h-5 w-5 text-joincolor'/>
                </div>
                <div className='attatch-assets flex items-center mt-4 '>
                    <div className='assets-button  w-14 h-14 flex items-center justify-center  mr-3 rounded-full  bg-stone-200 transition duration-300 ease-in-out'>
                        <label htmlFor="file">
                        <BiImage className='h-8 w-8 img-icon '/> 
                        </label> 
                                 
                    </div>
                    <div className='assets-button  w-14 h-14 flex items-center justify-center mr-3 rounded-full  bg-stone-200 transition duration-300 ease-in-out'>
                        <label htmlFor="video">
                        <IoIosVideocam className='h-8 w-8  p-0 vid-icon'/>   
                        </label>             
                    </div>
                    <div className='assets-button  w-14 h-14 flex items-center justify-center mr-2 rounded-full  bg-stone-200 transition duration-300 ease-in-out'>
                      <FcCalendar className='h-8 w-8  p-0 vid-icon'/>                
                    </div>
                    
                </div>
               
            </div>
            <div className='text-center w-full'>
                <input type="file" accept='image/jpeg, image/gif, image/png ,image/jpg'
                        name="image"
                        id= "file"
                         style={{display:'none'}}
                        onChange={handleimage}/>  
                {/* <label htmlFor="file">Select an image to</label>    */}
            </div>
            {
                shareImage&&<img src={URL.createObjectURL(shareImage)} className='w-full h-56 px-4'></img>
            }
            <div>
            <input
                type="file"
                accept="video/*"
                id='video'
                style={{ display: 'none' }}
                //ref={videoInputRef}
                onChange={handleVideo}
            />
            {
                video&&<video src={URL.createObjectURL(video)} className='w-full h-56 px-4' controls></video>
            }
            
            </div>
            <div className='post-button flex justify-end items-center py-2  mr-3 '>
                <div className='h-9 w-9 flex items-center justify-center rounded-full hover:bg-stone-200 mr-3'>
                <FiClock className='  h-5 w-5 text-joincolor '/>
                </div>
                <button className='text-base font-normal text-joincolor bg-stone-200 py-1 px-3 rounded-2xl post transition duration-300 ease-in-out'
                
                onClick={(event)=>{dispatch(postImageAPI(payload)),reset(event)}}>
                    Post
                </button>
            </div>
            
           
        </div>
    </div>
      }
    </>
  )
}

export default PostModal