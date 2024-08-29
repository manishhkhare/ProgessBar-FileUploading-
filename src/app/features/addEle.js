import { createSlice } from "@reduxjs/toolkit";


const addElementSlice =  createSlice({
    name:"myStore",
    initialState:{
        value:[1]
    },
    reducers:{ addElement:(state,action)=>{
        state.value.push(action.payload)
       
    
    } }
        
    
})


console.log(addElementSlice)
export const {addElement} = addElementSlice.actions
export default addElementSlice.reducer
