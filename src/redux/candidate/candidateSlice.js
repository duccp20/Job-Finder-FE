import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
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
      state.id = action.payload.id;
      state.data = action.payload.candidateOtherInfoDTO;
    },

    doSetCandidateData: (state, action) => {
      state.id = action.payload.id;
      state.data = action.payload.candidateOtherInfoDTO;
    },

    doSetSearchable: (state, action) => {
      state.data = {
        ...state.data,
        ...(state.data.searchable = action.payload),
      };
    },
  },
});

export const { doFetchCandidate, doSetCandidateData, doSetSearchable } =
  candidateSlice.actions;
export default candidateSlice.reducer;
