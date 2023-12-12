import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  user: {
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDay: "",
    role: "",
    avatar: "",
    id: "",
    location: "",
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    doLoginAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    doFetchAccountAction: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    doRedirectLogin: (state, action) => {
      state.isLoading = action.payload;
    },
    doLogoutAction: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    doSetProfileData: (state, action) => {
      state.user = {
        ...state.data,
        ...action.payload,
      };
    },
  },
});

export const {
  doLoginAction,
  doFetchAccountAction,
  doRedirectLogin,
  doLogoutAction,
  doSetProfileData,
} = accountSlice.actions;
export default accountSlice.reducer;
