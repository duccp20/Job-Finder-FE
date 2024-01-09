import axios from "../../utils/axiosCustomize";

export const callCreateApplyJob = (candidateApplication, fileCV) => {
  const formData = new FormData();

  // Tạo Blob cho JSON và thêm vào FormData
  const jsonBlob = new Blob([JSON.stringify(candidateApplication)], {
    type: "application/json",
  });
  formData.append("candidateApplication", jsonBlob);

  // Thêm fileCV vào FormData
  if (fileCV) {
    formData.append("fileCV", fileCV);
  } else {
    formData.append("fileCV", null);
  }

  // Gửi yêu cầu với Axios
  return axios({
    method: "post",
    url: `/api/v1/candidate-application`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const callGetAllAppliedJobByCandidate = (no, limit) => {
  return axios.get(
    `/api/v1/candidate-application/candidate?no=${no}&limit=${limit}`,
  );
};
export const callCheckCandidateHaveAppliedJob = (id) => {
  return axios.get(`/api/v1/candidate-application/check?idJob=${id}`);
};
