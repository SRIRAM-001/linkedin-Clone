import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    user:null,
   
}

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:
    {
        ordered:(state) =>
        {
            state.user--;
        },    
        SET_USER: (state,action)=>
        {
            //console.log("action",action)
            state.user=action.payload;
            //console.log("after",initialState)
            //console.log("photo",state.user.photoURL);

        },   
       
    },
    extraReducers: (builder) => {
        builder.addDefaultCase((state, action) => {
          state.user;
        });
        
      },
    
    
});





export default userSlice.reducer;
export const{ordered,SET_USER}= userSlice.actions;