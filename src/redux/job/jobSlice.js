import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    companyDTO: {
      id: "",
      name: "",
      logo: "",
      description: "",
      website: "",
      email: "",
      phone: "",
      tax: "",
      createdDate: "",
      location: "",
      personnelSize: "",
      statusDTO: {},
    },

    name: "",
    positionDTOs: [],
    majorDTOs: [],
    scheduleDTOs: [],
    amount: "",
    startDate: "",
    endDate: "",
    salaryMin: "",
    salaryMax: "",
    province: "",
    location: "",
    description: "",
    requirement: "",
    otherInfo: "",
    id: "",
    statusDTO: {},
    numOfApplication: "",
  },
  isSavedJob: false,
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    doSetJobData: (state, action) => {
      state.data = action.payload;
    },

    doSetSavedJob: (state, action) => {
      state.isSavedJob = !state.isSavedJob;
    },
  },
});

export const { doSetJobData, doSetSavedJob } = jobSlice.actions;
export default jobSlice.reducer;
