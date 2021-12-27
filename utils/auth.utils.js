import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let url = false ? "http://localhost:3000" : "https://numetrica.herokuapp.com";
// process.env.NEXT_PUBLIC_DEV
export const login = createAsyncThunk('user/login',async ({ email, password })=>{
  
    const response = await axios.post(
      `${url}/auth/company/login`,
      {
        email: email,
        password: password,
      }
    );
    
    console.log(response.status);
    return response.data;
    
  
})


export const signup =async ({ email, password, display_name })=>{
  
    const response = await axios.post(
      `${url}/auth/company/register`,
      {
        email: email,
        password: password,
        display_name: display_name,
      }
    );
    console.log(response.data)
    return response.data;

}


