import axios from "../../utils/axiosCustomize";

export const callCreateJobCare = (id) => {
  return axios.post(`/api/v1/candidate-job-care?id=${id}`);
};
export const callGetJobCareByCandidateID = (id, no, limit) => {
  return axios.get(
    `/api/v1/candidate-job-care/candidate/${id}?no=${no}&limit=${limit}`,
  );
};

export const callGetAllCandidateJobCare = () => {
  return axios.get(`/api/v1/candidate-job-care`);
};

export const callDeleteJobCareByCandidateID = (id) => {
  return axios.delete(`/api/v1/candidate-job-care/${id}`);
};

export const callDeleteJobCareByJobID = (id) => {
  return axios.delete(`/api/v1/candidate-job-care/jobId/${id}`);
};
