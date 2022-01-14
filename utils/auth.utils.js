import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useRouter } from "next/router";
let url = false ? "http://localhost:3000" : "https://numetrica.herokuapp.com";
// process.env.NEXT_PUBLIC_DEV

export const login = createAsyncThunk('user/login',async ({ email, password })=>{
  
    return await axios.post(
      `${url}/auth/company/login`,
      {
        email: email,
        password: password,
      },
      {
        validateStatus:()=>true
      }
      
    )
    .then((response)=>{console.log(response.status);return ({data:response.data, status:response.status})},(response)=>{console.log(response.status);return ({status:response.status})})
    

})


export const signup =async ({ email, password, display_name })=>{
  
    return await axios.post(
      `${url}/auth/company/register`,
      {
        email: email,
        password: password,
        display_name: display_name,
      },
      {
        validateStatus:()=>true
      }
    ).then(response=>{return {data:response.data,status:response.status}},response=>{return {status:response.status}})
    

}


