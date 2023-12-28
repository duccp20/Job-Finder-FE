import axios from "../../utils/axiosCustomize";

export const callGetAllJobActive = (no, limit) => {
  //default no = 0, default limit = 10
  return axios.get(`/api/v1/job/active?no=${no}&limit=${limit}`);
};

export const callGetJobByID = (id) => {
  return axios.get("/api/v1/job/" + id);
};
