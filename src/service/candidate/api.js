import axios from "../../utils/axiosCustomize";

export const callFetchCandidateByUserId = (id) => {
  return axios.get(`/api/v1/candidate/${id}`);
};

export const callEditProfile = (
  id,
  candidateProfileDTO,
  fileCV,
  fileAvatar,
) => {
  const candidateProfileDTOtoJSON = JSON.stringify(candidateProfileDTO);
  const formData = new FormData();

  formData.append("candidateProfileDTO", candidateProfileDTOtoJSON);
  if (fileCV) {
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
  } else {
    formData.append("fileCV", null);
  }

  if (fileAvatar) {
    formData.append("fileAvatar", fileAvatar);
  }
  return axios({
    method: "put",
    url: `/api/v1/candidate/${id}`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const callUpdateAvatar = (id, fileAvatar) => {
  const formData = new FormData();
  formData.append("fileAvatar", fileAvatar);

  const url = `/api/v1/candidate/update/image/${id}`;

  return axios.put(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
