import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    university: "",
    referenceLetter: "",
    desiredJob: "",
    desiredWorkingProvince: "",
    cv: "",
    positionDTOs: [],
    majorDTOs: [],
    scheduleDTOs: [],
  },
};

export const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    doFetchCandidate: (state, action) => {
      state.data = action.payload;
    },

    doSetCandidateData: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
});

export const { doFetchCandidate, doSetCandidateData } = candidateSlice.actions;
export default candidateSlice.reducer;
