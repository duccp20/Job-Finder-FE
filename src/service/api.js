import axios from "../utils/axiosCustomize";


export const callRegister = (
  firstName,
  lastName,
  email,
  password,
  phone,
  role
) => {
  return axios.post("/api/v1/auth/register", {
    firstName,
    lastName,
    email,
    password,
    phone,
  });
};

export const callActiveMail = (email) => {
  return axios.post("/api/v1/candidate/active-account", { email });
};

export const callLogin = (username, password) => {
  return axios.post("/api/v1/auth/login", { username, password });
};

export const callFetchAccount = () => {
  return axios.get("/api/v1/auth/account");
};

export const callLogout = () => {
  return axios.post("/api/v1/auth/logout");
};

export const callFetchUserPagination = (query) => {
  return axios.get(`/api/v1/user?${query}`);
};
