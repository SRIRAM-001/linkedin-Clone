
import { createSlice } from '@reduxjs/toolkit';

const initialState = 
{
    loading:null,
    title:null,
    imageurl:null,
    profileurl:null,
    description:null,
}


// const dataSlice = createSlice({
//     name:'data',
//     initialState,
//     reducers:
//     {
//         ordered:(state) =>
//         {
//             state.user--;
//         },    
//         SET_USER: (state,action)=>
//         {
//             console.log("action",action)
//             state.user=action.payload;
//             //console.log("photo",state.user.photoURL);

//         },   
       
//     },
    
    
    
// });
const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:
    {
        upload:(state,action)=>
        {
            console.log("in reducer")
            console.log(state)
            //console.log(action.payload.title,+"in dataSlice")
            //state.title='hiii'
            state.title = action.payload.title;
            state.profileurl = action.payload.image;
            state.description = action.payload.description;
            state.imageurl = action.payload.imageurl;
            console.log(initialState)

        }
    }
});



export default dataSlice.reducer;
export const {upload} = dataSlice.actions;
