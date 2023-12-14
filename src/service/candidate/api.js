import axios from "../../utils/axiosCustomize";

export const callFetchCandidateByUserId = (id) => {
  return axios.get(`/api/v1/candidate/${id}`);
};

export const callEditProfile = (id, candidateProfileDTO, fileCV) => {
  const formData = new FormData();
  formData.append("candidateProfileDTO", candidateProfileDTO);
  formData.append(
    "fileCV",
    new Blob([fileCV], { type: "application/pdf" }),
    "Java_Backend_NguyenMinhVy.pdf",
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
