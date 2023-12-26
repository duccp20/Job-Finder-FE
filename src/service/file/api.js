import axios from "../../utils/axiosCustomize";

export const uploadFile = () => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post("/api/v1/file/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const displayFile = (fileName) => {
  return axios.get(`/api/v1/file/display/${fileName}`, {
    responseType: "blob", // important
  });
};

export const downloadFile = (fileName) => {
  return axios.get(`/api/v1/file/download/${fileName}`, {
    responseType: "blob", // important
  });
};

export const getRawFile = (fileName) => {
  return axios.get(`/api/v1/file/raw/${fileName}`);
};
