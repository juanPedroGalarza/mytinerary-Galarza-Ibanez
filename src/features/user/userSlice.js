import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
    user: {}
  },
  reducers: {
    logIn: (state) => {
      state.logged = true
    },
    logOut: (state) => {
      state.logged = false
      state.user = {}
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})
export const { logIn, logOut, setUser } = userSlice.actions

export default userSlice.reducer