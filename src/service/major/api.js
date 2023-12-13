import axios from "../../utils/axiosCustomize";

export const getAllMajor = () => {
  return axios.get("/api/v1/major");
};
