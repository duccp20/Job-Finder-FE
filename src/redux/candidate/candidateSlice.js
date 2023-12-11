import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    university: "",
    referenceLetter: "",
    desiredJob: "",
    desiredWorkingProvince: "",
    cv: "",
  },
};

export const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    doFetchCandidate: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { doFetchCandidate } = candidateSlice.actions;
export default candidateSlice.reducer;
