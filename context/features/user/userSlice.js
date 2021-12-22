import { createSlice } from "@reduxjs/toolkit";
import { login } from "utils/auth.utils";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status:false,
    loading:false,
  },
  reducers: {
    logout: (state) => {
      state.user={};
      state.status=false;
      state.loading=false;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(login.fulfilled,(state,action)=>{
      state.user = action.payload;
      if(action.payload.success){
        state.status=true;
        state.loading=false;
      }
      else{
        state.status=false;
        state.loading=false;
      }
      
    })
    builder.addCase(login.pending,(state,action)=>{
      state.status=false;
      state.loading=true;
    })
    builder.addCase(login.rejected,(state,action)=>{
      state.status=false;
      state.loading=false;
    })
  }
});
//generate action creators
export const {logout} = userSlice.actions;
export default userSlice.reducer;
