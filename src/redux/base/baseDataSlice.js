import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    majors: "",
    positions: "",
    schedules: "",
  },
};

export const baseDataSlice = createSlice({
  name: "baseData",
  initialState,
  reducers: {
    doSetMajor: (state, action) => {
      state.data.majors = action.payload;
    },
    doSetPosition: (state, action) => {
      state.data.positions = action.payload;
    },
    doSetSchedule: (state, action) => {
      state.data.schedules = action.payload;
    },
  },
});

export const { doSetMajor, doSetPosition, doSetSchedule } =
  baseDataSlice.actions;
export default baseDataSlice.reducer;
