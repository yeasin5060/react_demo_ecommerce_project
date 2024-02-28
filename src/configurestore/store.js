import { configureStore } from '@reduxjs/toolkit'
import userslice from '../userslice'

export default configureStore({
    reducer: {
        userdata : userslice,
  },
})