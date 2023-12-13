import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../redux/account/accountSlice";
import candidateReducer from "../redux/candidate/candidateSlice";
import baseDataReducer from "../redux/basedata/baseDataSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    candidate: candidateReducer,
    baseData: baseDataReducer,
  },
});
