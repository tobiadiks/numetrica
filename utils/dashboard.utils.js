import axios from "axios";
let url = false ? "http://localhost:3000" : "https://numetrica.herokuapp.com";

export const dashboardMetric = async ({ company_id, accessToken }) => {

    return await axios.get(`${url}/${company_id}/dashboard`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      validateStatus:()=>true
    })
    .then(response=>{return {data:response.data,status:response.status}},response=>{return {status:response.status}}) 
    ;
    
};