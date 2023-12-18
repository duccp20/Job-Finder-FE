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
    RoleDTO: {},
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

    doSetRoleGuest: (state, action) => {
      state.isAuthenticated = false;
      state.user = {
        ...state.user,
        ...action.payload,
      };
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
        ...(state.user.RoleDTO = action.payload),
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
  doSetRoleGuest,
} = accountSlice.actions;
export default accountSlice.reducer;
