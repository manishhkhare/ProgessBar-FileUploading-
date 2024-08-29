import { configureStore } from "@reduxjs/toolkit";
import  addElementReducer  from "./features/addEle";
export const store = configureStore({
  reducer: {
    rootReducer:addElementReducer, // Use the imported reducer
  },
});

console.log(store);
