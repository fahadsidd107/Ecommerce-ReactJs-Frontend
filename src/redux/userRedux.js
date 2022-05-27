import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
currentUser: null,
isFetching: false,
error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state,action) => {
      state.isFetching = true;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {},
  },
});

export const {  } = userSlice.actions;
export default userSlice.reducer;
