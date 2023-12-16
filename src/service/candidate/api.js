import axios from "../../utils/axiosCustomize";

export const callFetchCandidateByUserId = (id) => {
  return axios.get(`/api/v1/candidate/${id}`);
};

export const callEditProfile = (id, candidateProfileDTO, fileCV) => {
  const candidateProfileDTOtoJSON = JSON.stringify(candidateProfileDTO);
  const formData = new FormData();

  formData.append("candidateProfileDTO", candidateProfileDTOtoJSON);
  formData.append(
    "fileCV",
    new Blob([fileCV], { type: "application/pdf" }),
    `${
      candidateProfileDTO.userProfileDTO.lastName +
      "_" +
      candidateProfileDTO.userProfileDTO.firstName +
      "_"
    }.pdf`,
  );
  return axios({
    method: "put",
    url: `/api/v1/candidate/profile/${id}`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// .put(`/api/v1/candidate/profile/${id}`, {
//   userProfileDTO,
//   candidateDTO,
// });
