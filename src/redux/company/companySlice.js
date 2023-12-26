import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    doFetchCompany: (state, action) => {
      state.data = action.payload;
    },

    doSetCompanyData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { doFetchCompany, doSetCompanyData } = companySlice.actions;
export default companySlice.reducer;
