import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../redux/account/accountSlice";
import candidateReducer from "../redux/candidate/candidateSlice";
import baseDataReducer from "../redux/base/baseDataSlice";
import companyReducer from "../redux/company/companySlice";
import jobReducer from "../redux/job/jobSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    candidate: candidateReducer,
    baseData: baseDataReducer,
    company: companyReducer,
    job: jobReducer,
  },
});
