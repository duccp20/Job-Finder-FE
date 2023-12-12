import axios from "../../utils/axiosCustomize";

export const callFetchCandidateByUserId = (id) => {
  return axios.get(`/api/v1/candidate/${id}`);
};

export const callEditProfile = (userProfileDTO, candidateDTO) => {
  return axios.put(`/api/v1/candidate/profile`, {
    userProfileDTO,
    candidateDTO,
  });
};
