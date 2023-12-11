import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../redux/account/accountSlice";
import candidateReducer from "../redux/candidate/candidateSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    candidate: candidateReducer,
  },
});
