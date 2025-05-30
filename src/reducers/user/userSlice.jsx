import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  age: 19,
  name:"jose",
  
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    setUser: (state, action) => {
      state.age = action.payload.age,
      state.name = action.payload.name
    },
  },
})


export const { setUser } = userSlice.actions

export default userSlice.reducer