import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk('user/login',async ({ email, password })=>{
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/company/login",
      {
        email: email,
        password: password,
      }
    );
    
    return response.data;
    
  } catch (err) {
    throw new Error(err);
    
  }
})


export const signup =async ({ email, password, display_name })=>{
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/company/signup",
      {
        email: email,
        password: password,
        display_name: display_name,
      }
    );
    return response.data;
  } catch (err) {
    const response = new Error(err);
    throw response;
  }
}


