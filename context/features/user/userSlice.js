import { createSlice } from "@reduxjs/toolkit";
import { login } from "utils/auth.utils";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status: false,
    loading: false,
    
  },
  reducers: {
    logout: (state) => {
      state.user = {};
      state.status = false;
      state.loading = false;
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = true;
      state.loading = false;
    });
    builder.addCase(login.pending, (state, action) => {
      state.status = false;
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = false;
      state.loading = false;
      alert("Failed to log in check credentials");
    });
  },
});
//generate action creators
export const { logout } = userSlice.actions;
export default userSlice.reducer;
