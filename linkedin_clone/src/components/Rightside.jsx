import React from 'react'

function Rightside() {
  return (
    <div className='Container-right mb-6'>
        <div className='followcard text-center overflow-hidden mb-2 bg-white rounded-md '>
          <div className='title flex justify-between items-center p-3 text-xs text-joincolor'>
            <h2 className='font-semibold' >Add to your feed</h2>
            <img src="src/assets/feed-icon.svg" alt="" />

          </div>
          <div className='feedlist  m-2 '>
          
            <li className='list-none flex items-center my-2'>
              <a className='flex items-center justify-center'>
                <div className='avatar text-xl rounded-full  flex items-center justify-center h-9 w-9 '>#</div>

                <div className='flex flex-col'>
                  <span>#Linked in </span>
                  <button className='followbutton hover:bg-gray-200 '>Follow</button>
                </div>
              </a>
            </li>
            <li className='list-none flex items-center w-full '>
              <a className='flex'>
                <div className='avatar text-xl rounded-full  flex items-center justify-center h-9 w-9 '>#</div>

                <div className='flex flex-col'>
                  <span>#Video</span>
                  <button className='followbutton hover:bg-gray-200 '>Follow</button>
                </div>
              </a>
            </li>
            
           

          </div>
          <div className='recommendations flex items-center justify-left font-medium mx-3 text-lightblue'>
           <a className='mr-1 my-2 hover:underline'>View all recommendations</a>
           <img src="src/assets/right-icon.svg" alt="" />
          </div>
        </div>
        <div className='bannercard rounded-md bg-white '>
          <img src="src/assets/job-ad.jpg" alt="" className='p-2 h-56' />

        </div>
    </div>
  )
}

export default Rightside