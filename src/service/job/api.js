import axios from "../../utils/axiosCustomize";

export const callGetAllJobActive = (no, limit) => {
  //default no = 0, default limit = 10
  return axios.get(`/api/v1/job/active?no=${no}&limit=${limit}`);
};

export const callGetJobByID = (id) => {
  return axios.get("/api/v1/job/" + id);
};

//no = 0 => page = 1;
//limit = item trong 1 page
export const callGetActiveJobByCompanyID = (no, limit) => {
  return axios.get(`/api/v1/job/active/hr/company?no=${no}&limit=${limit}`);
};
