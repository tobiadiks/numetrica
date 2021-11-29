import { createSlice } from "@reduxjs/toolkit";
import { login } from "utils/auth.utils";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status:null,
  },
  reducers: {
    logout: (state) => {
      state.user={};
      state.status=null
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(login.fulfilled,(state,action)=>{
      state.user = action.payload;
      if(action.payload.success){
        state.status=true;
      }
      else{
        state.status=false;
      }
      
    })
    builder.addCase(login.pending,(state,action)=>{
      state.status='loading'
    })
    builder.addCase(login.rejected,(state,action)=>{
      state.status=false;
    })
  }
});
//generate action creators
export const {logout} = userSlice.actions;
export default userSlice.reducer;
