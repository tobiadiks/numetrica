import axios from "axios"
let url = false ? "http://localhost:3000" : "https://numetrica.herokuapp.com";
export const abtestGet =async ({accessToken, company_id,project_id})=>{
  
    return await axios.get(
        `${url}/abtest/${company_id}/${project_id}/`,
      
      {
        validateStatus:()=>true,
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    ).then(response=>{return {data:response.data,status:response.status}},response=>{return {status:response.status}})
    

}

export const abtestEdit =async ({accessToken, company_id,project_id,item_a_url,item_b_url})=>{
  
  return await axios.post(
      `${url}/abtest/${company_id}/${project_id}/`,
      {
item_a_url,
item_b_url
      },
    {
      validateStatus:()=>true,
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  ).then(response=>{return {data:response.data,status:response.status}},response=>{return {status:response.status}})
  

}

export const abtestVote =async ({project_id,value})=>{
  
  return await axios.post(
      `${url}/abtest/${project_id}/`,
      {
        value
      },
    
    {
      validateStatus:()=>true,
     
    }
  ).then(response=>{return {data:response.data,status:response.status}},response=>{return {status:response.status}})
  

}


export const abtestGetVote =async ({project_id,value})=>{
  
  return await axios.get(
      `${url}/abtest/${project_id}/`,
    
    {
      validateStatus:()=>true,
      
    }
  ).then(response=>{return {data:response.data,status:response.status}},response=>{return {status:response.status}})
  

}
