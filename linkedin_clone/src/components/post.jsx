import React, { useEffect, useState } from "react";
import { fetchALLAPI } from "../actions.js";
import { useDispatch,useSelector } from "react-redux";

import { BiRepost,BiLike } from 'react-icons/bi'
import {IoIosSend} from 'react-icons/io'
import {FaRegCommentDots} from 'react-icons/fa'

const ImageGallery = (props) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const user =useSelector((state)=>state.user.user)
    
    const dispatch = useDispatch();
  
    // Fetch initial images
    useEffect(() => {
        console.log("showmodal value -",props.showModal,user)
        
        setIsLoading(true)
          fetchImages();
        
    }, [props.reloadGallery]);

    const fetchImages = () => {
        // Call your API function to fetch the images
        console.log("user------------",user)
        dispatch(fetchALLAPI(user.email))
          .then((fetchedImages) => {
            setImages(fetchedImages);
          })
          .catch((error) => {
            console.log("Error fetching images:", error);
          })
          .finally(()=>
          {
            setIsLoading(false);
          })
      };
      
      return (
        <>
        {console.log(isLoading,user)}
        { 
        isLoading?(
          
          <div className="top-0 left-0 right-0 bottom-0 absolute spin-wheel flex  justify-center items-center">
            {console.log("loading spin wheel",isLoading)}
            <img src="src/assets/loading.gif" alt="loading" />
          </div>
        ):(
         <div> 
          {
          images.map((image) => (
             
           <ImageWithMetadata  image={image} props={props}/>
           ))
           }
        
        </div>)
        
        }
        </>
          
      );
    };

    const ImageWithMetadata = ({ image}) => {
        const url = image.url;
        const metadata= image.data;
      
        return (
        <>
        {/* {isLoading?(
          <div>
            <img src="src/assets/loading.gif" alt="loading" />
          </div>
        ):( */}
        
        <div>
            <div className='article rounded-md bg-white overflow-hidden mb-5 '>
                
            <div className='sharedactor flex items-center justify-between my-2 px-4 pt-2'>
              <a className='flex items-center justify-center '>
                <img src={metadata.image} alt="" className='h-10 w-10 mr-3 rounded-full'/>
                <div className='flex flex-col text-xs '>
                <span className='font-semibold text-lg'>{metadata.title}</span>
                {/* <span>{metadata.description}</span> */}
                
                </div>
              </a>
              <button className=' self-start '>
                <img src="src/assets/dot.jpeg" alt=""  className='border-2 border-black h-2.5'/>
              </button>

            </div>
            <div className='description text-left px-7 py-5 '>{metadata.description}
            
            <div className='sharedimage w-full mt-2 p-1 '>
              <a className='w-full'>
                <img src={url} alt="" className='w-full h-64' />
              </a>
            </div>
            </div>
            {/* <div className='socialcomments '>
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
            </div> */}
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
                {/* <BiRepost className='h-11 w-11 text-joincolor repost'/> */}
                <img src="src/assets/repostpng.png" alt="" className='h-7 w-7 small:h-5 small:w-5'/>
                <span className='ml-1 text-joincolor'>Repost</span>
              </button>
              <button className='flex items-center small:ml-2'>
                <IoIosSend className='h-7 w-7 text-joincolor small:h-5 small:w-5'/>
                <span className='ml-1 text-joincolor'>Send</span>
              </button>

            </div>
          </div>
          </div>
          {/* )} */}
             
          </>
        );
      };

      export default ImageGallery;