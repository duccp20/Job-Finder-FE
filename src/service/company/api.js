import axios from "../../utils/axiosCustomize";

export const callGetAllCompanyActive = () => {
  return axios.get(`/api/v1/company`);
};
