import axios from "../../utils/axiosCustomize";

export const callRegister = (
  firstName,
  lastName,
  email,
  password,
  phone,
  role,
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

export const callRegisterHR = (hrCreationDTO) => {
  const formData = new FormData();
  const hrCreationDTOString = JSON.stringify(hrCreationDTO);

  formData.append(
    "hrCreationDTO",
    new Blob([hrCreationDTOString], { type: "application/json" }),
  );

  return axios({
    method: "post",
    url: "http://localhost:8080/api/v1/hr",
    data: formData,
  });
};

export const callActiveMail = (email) => {
  return axios.post("/api/v1/candidate/active-account", { email });
};

export const callLogin = (email, password) => {
  return axios.post("/api/v1/user/login", { email, password });
};

export const callSendForgetPass = (email) => {
  return axios.post("/api/v1/user/forget-password", { email });
};

export const callResetPassword = (token, newPassword) => {
  return axios.post("/api/v1/user/reset-password-by-token", {
    token,
    newPassword,
  });
};

export const callChangePassword = (oldPassword, newPassword) => {
  return axios.put("/api/v1/user/change-password", {
    oldPassword,
    newPassword,
  });
};
export const callFetchUserProfile = () => {
  return axios.get("/api/v1/user");
};
