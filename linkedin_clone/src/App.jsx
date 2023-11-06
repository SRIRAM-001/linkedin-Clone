import { Route,Routes} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import { useEffect } from 'react'
import Home from './components/Home'
import { useDispatch } from 'react-redux'
//import { getAuthApp } from './actions.js'





function App() {

  // const dispatch = useDispatch();
  // useEffect(()=>
  // {
  //   dispatch(getAuthApp());

  // },[]);
  

  return (
    <div>    
     <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
      </Routes>   
    </div>
    
  )
}

export default App
