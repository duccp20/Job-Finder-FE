import axios from "../../utils/axiosCustomize";

export const getAllSchedule = () => {
  return axios.get("/api/v1/schedule");
};
