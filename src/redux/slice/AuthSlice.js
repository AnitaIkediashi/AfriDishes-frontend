import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  UserID: null,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      // console.log(action.payload);
      //update the initial states
      const {email, userName, UserID} = action.payload
      state.isLoggedIn = true
      state.email = email
      state.userName = userName
      state.UserID = UserID
    },
    removeActiveUser: (state, action) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.UserID = null;
    }
  }
});

export const {setActiveUser, removeActiveUser} = AuthSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectEmail = (state) => state.auth.Email
export const selectUserName = (state) => state.auth.userName
export const selectUserID = (state) => state.auth.UserID

export default AuthSlice.reducer