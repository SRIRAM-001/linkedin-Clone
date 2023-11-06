
import { configureStore, applyMiddleware} from '@reduxjs/toolkit'
import UserReducer from '../Reducer/userSlice'
import dataSlice from '../Reducer/dataSlice';
import thunkMiddleware from 'redux-thunk';


const middle= [thunkMiddleware];




const store = configureStore({
    reducer:{
        user:UserReducer,
        data:dataSlice

    },
   middleware: ( getDefaultMiddleware )=>getDefaultMiddleware({serializableCheck: false}).concat(middle),

})


export default store;