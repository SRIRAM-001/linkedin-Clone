import React from 'react'
import Header from './Header'
import Leftside from './leftside'
import Rightside from './Rightside'
import Main from './main'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  const user = useSelector((state)=>state.user.user)
  

  const navigate = useNavigate();

  return (

    <div className='mx-3'>
      {
        !user&&navigate('/', { replace: true })
        }
       <div>
        <Header/>
        </div>
      <div className='mt-11 w-full max-w-full mx-auto flex small:flex-col text-center justify-center items-center py-4'>
        <h5 className='text-base text-lightblue underline font-bold '><a>Hiring in a Hurry? - </a></h5>
        <p className='underline font-semibold text-base text-joincolor '> Find talented pros in record time upwork and keep business moving </p>
      </div>
      <div className=' layout sm:px-16'>
         <Leftside />
         <Main/>
         <Rightside/>
      </div>
        
    </div>
  )
}

export default Home