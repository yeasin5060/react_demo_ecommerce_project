import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
  name: 'counter',
  initialState: {
    value: localStorage.getItem("cutomerdata") ? JSON.parse(localStorage.getItem("cutomerdata")) : null,
  },
  reducers: {
    customers: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {customers} = customerSlice.actions

export default customerSlice.reducer