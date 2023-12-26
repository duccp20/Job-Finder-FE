import axios from "../../utils/axiosCustomize";

export const getAllPosition = () => {
  return axios.get("/api/v1/position");
};
