import logo from './logo.svg';
import './App.css';
import ProgressBar from './ProgressBar';
import LoginForm from './LoginForm';
import Pagination from './Pagination';
import Componand from './Componand';
import{ friendContext }  from './FriendContext';
import { useContext, useState } from 'react';
import Componand2 from './Componand2';

import {  createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
//  export const mySlice  = createSlice({
//   name:'counter',
//   initialState:{
//     value:[1]
//   },
//   reducers:{
//     reducerFunction:(state,action)=>{
//         console.log(state)
//            }
//   }
//  })
 
export default function App() {
const myStore = useSelector((state)=>{return state})
const dispatch = useDispatch();
  
  //  let click=(e)=>{
  //   console.log(e);
  //   dispatch()
  //  }


  return (
    <>
    <LoginForm/>
    <Pagination/>
    
    {/* <button type='button' onClick={(e)=>{click(e);}}>Click!</button> 
    */}
   </>
  );
}
//  export default mySlice.reducer
// export const { reducerFunction } = mySlice.actions;






