import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../assets/features/counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer//registration
  },
})





//steps:
// create store
// wrap app component under Provider
// create Slice
// register reducer in store