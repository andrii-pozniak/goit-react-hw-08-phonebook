import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from 'Redux/auth/operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      console.log(action)
      console.log(state)
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      console.log(state)
      console.log(action)
      state.user = action.payload.user;
      state.token = action.payload.token;
      console.log(state)
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      console.log(state)
      state.token = null;
      console.log(state.isLoggedIn)
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      console.log(action)
      console.log(state)
      state.user = action.payload;
      console.log(state.user)
      console.log(state.isLoggedIn)
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;