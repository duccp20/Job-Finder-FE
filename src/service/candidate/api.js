import axios from "../../utils/axiosCustomize";

export const callFetchCandidateByUserId = (id) => {
  return axios.get(`/api/v1/candidate/${id}`);
};

export const callEditProfile = (id, candidateProfileDTO, fileCV) => {
  const formData = new FormData();

  // Tạo Blob cho JSON và thêm vào FormData
  const jsonBlob = new Blob([JSON.stringify(candidateProfileDTO)], {
    type: "application/json",
  });
  formData.append("candidateProfileDTO", jsonBlob);

  // Thêm fileCV vào FormData
  if (fileCV) {
    formData.append(
      "fileCV",
      new Blob([fileCV], { type: "application/pdf" }),
      `${candidateProfileDTO.userProfileDTO.lastName}_${candidateProfileDTO.userProfileDTO.firstName}_.pdf`,
    );
  } else {
    formData.append("fileCV", null);
  }

  // Gửi yêu cầu với Axios
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
      "Content-Type": "multipart/form-data, charset=UTF-8",
    },
  });
};

export const callChangeSearchable = (id) => {
  return axios.put(`/api/v1/candidate/searchable/${id}`);
};
