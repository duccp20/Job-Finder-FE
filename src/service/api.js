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
    role,
  });
};

export const callActiveMail = (email) => {
  return axios.post("/api/v1/candidate/active-account", { email });
};

export const callLogin = (email, password) => {
  return axios.post("/api/v1/user/login", { email, password });
};

export const callSendForgetPassOTP = (email) => {
  return axios.post("/api/v1/user/otp-forget-password", { email });
};

export const callActivePassOTP = (otp) => {
  return axios.get("/api/v1/user/active-otp", { otp });
};

// export const callFetchAccount = () => {
//   return axios.get("/api/v1/auth/account");
// };

// export const callLogout = () => {
//   return axios.post("/api/v1/auth/logout");
// };

// export const callFetchUserPagination = (query) => {
//   return axios.get(`/api/v1/user?${query}`);
// };
