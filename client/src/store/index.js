import { configureStore } from '@reduxjs/toolkit'
import dataSclice from "./dataSclice" 

export const store = configureStore({
   reducer:{
      data: dataSclice
   }
})