import { configureStore } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { store } from './app/store'
import DispatchAndSelect from './DispatchAndSelect'
export default  function CreateStore(){

  return (
    <>
    <Provider store={store}>
     <DispatchAndSelect/>
    </Provider>
    
    </>
  )
}
