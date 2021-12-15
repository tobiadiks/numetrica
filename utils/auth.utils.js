import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let url = process.env.NEXT_PUBLIC_DEV ? "http://localhost:3000" : "https://numetrica.herokuapp.com";

export const login = createAsyncThunk('user/login',async ({ email, password })=>{
  try {
    const response = await axios.post(
      `${url}/auth/company/login`,
      {
        email: email,
        password: password,
      }
    );
    console.log(url)
    return response.data;
    
  } catch (err) {
    console.log(url)
    throw new Error(err);
    
  }
})


export const signup =async ({ email, password, display_name })=>{
  try {
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
  } catch (err) {
    const response = new Error(err);
    throw response;
  }
}


