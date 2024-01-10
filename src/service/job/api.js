import axios from "../../utils/axiosCustomize";

export const callGetAllJobActive = (no, limit) => {
  //default no = 0, default limit = 10
  return axios.get(`/api/v1/job/active?no=${no}&limit=${limit}`);
};

export const callGetJobByID = (id, body) => {
  return axios.get(`/api/v1/job/${id}`, body);
};

//no = 0 => page = 1;
//limit = item trong 1 page
export const callGetAllJobByCompanyID = (no, limit) => {
  return axios.get(`/api/v1/job/hr/company?no=${no}&limit=${limit}`);
};

export const callGetActiveJobByCompanyID = (no, limit) => {
  return axios.get(`/api/v1/job/active/hr/company?no=${no}&limit=${limit}`);
};

export const callGetDisableJobByCompanyID = (no, limit) => {
  return axios.get(`/api/v1/job/disable/hr/company?no=${no}&limit=${limit}`);
};
export const callCreateJob = (body) => {
  return axios.post(`/api/v1/job`, body);
};

export const callReplicateJob = (id, body) => {
  return axios.put(`/api/v1/job/replicate/${id}`, body);
};
export const callDeleteJob = (id) => {
  return axios.delete(`/api/v1/job/delete/${id}`);
};

export const callDisableJob = (id) => {
  return axios.put(`/api/v1/job/disable/${id}`);
};

export const callEditJob = (id, body) => {
  return axios.put(`/api/v1/job/${id}`, body);
};

//callback function
//CRUD: create, read, update, delete
// get: lấy thông tinh (Hiển thị): read
// put: update (từ 1 trở lên)
// patch: update (update 1 cái )
// post: create
// delete: delete
