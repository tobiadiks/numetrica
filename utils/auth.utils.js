import axios from "axios";

export async function login({ email, password }) {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/company/login",
      {
        email: email,
        password: password,
      }
    );
    await localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  } catch (err) {
    const response = new Error(err);
    return response;
  }
}

export async function logout() {
  try {
    await localStorage.removeItem("user");
  } catch (err) {
    throw new Error(err);
  }
}
