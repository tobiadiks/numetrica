import axios from "axios"
let url = false ? "http://localhost:3000" : "https://numetrica.herokuapp.com";
export const abtest =async ({accessToken, company_id,project_id, imageUrlA, imageUrlB })=>{
  
    return await axios.post(
        `${url}/${company_id}/project/${project_id}/abtest`,
      {
        company_id,
        project_id,
        accessToken,
        imageUrlA,
        imageUrlB
      },
      {
        validateStatus:()=>true,
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    ).then(response=>{return {data:response.data,status:response.status}},response=>{return {status:response.status}})
    

}
