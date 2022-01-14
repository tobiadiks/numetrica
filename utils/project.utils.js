import axios from "axios";
let url = false ? "http://localhost:3000" : "https://numetrica.herokuapp.com";

export const allProject = async ({ company_id, accessToken }) => {

    return await axios.get(`${url}/${company_id}/project`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      validateStatus:()=>true
    })
    .then(response=>{return {data:response.data,status:response.status}},response=>{return {status:response.status}}) 
    ;
    
};

export const createProject = async ({
  company_id,
  accessToken,
  name,
  type_id,
  description,
  color,
  date_created
}) => {
  try {
    const response = await axios.post(
      `${url}/${company_id}/project`,
      {
        name,
        description,
        color,
        type_id,
        date_created
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    const response = new Error(err);
    throw response;
  }
};

export const updateProject = async ({
  company_id,
  accessToken,
  project_id,
  name,
  description,
}) => {
  try {
    const response = await axios.put(
      `${url}/${company_id}/project/${project_id}`,
      {
        name,
        description,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(response.data);
    
    return response.data;
  } catch (err) {
    const response = new Error(err);
    throw response;
  }
};

export const deleteProject = async ({
  company_id,
  accessToken,
  project_id,
}) => {
  try {
    const response = await axios.delete(
      `${url}/${company_id}/project/${project_id}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    const response = new Error(err);
    throw response;
  }
};
