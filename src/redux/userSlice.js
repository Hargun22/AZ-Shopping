import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    start: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
    failure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { start, failure, loginSuccess, logoutSuccess } =
  userSlice.actions;
export const getUser = (state) => state.user.currentUser;

export default userSlice.reducer;
