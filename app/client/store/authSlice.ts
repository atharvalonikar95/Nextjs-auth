import { createSlice } from "@reduxjs/toolkit";


interface UserData {
  username: string;
  firstname:string;
  lastname:string;
  email: string;
  id:any;
  image: string ;
  role: string;
}

interface AuthState {
  status: boolean;
  userData: UserData | null;
}

// const initialState: AuthState = {
//   status: false,
//   userData: null,
// };
const preloadedUser = typeof window !== "undefined"
  ? JSON.parse(localStorage.getItem("userData") || "null")
  : null;

const preloadedStatus = typeof window !== "undefined"
  ? localStorage.getItem("status") === "true"
  : false;

const initialState: AuthState = {
  status: preloadedStatus,
  userData: preloadedUser,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true,
      state.userData = action.payload,
      localStorage.setItem("userData", JSON.stringify(action.payload));
      localStorage.setItem("status", "true");

    },

    logout: (state) => {
      state.status = false,
      state.userData = null,
      localStorage.removeItem("userData");
      localStorage.setItem("status", "false");
    },
    updateUser(state, action) {
      if (state.userData) {
        state.userData = {
          ...state.userData,
          ...action.payload,
        };
      localStorage.setItem("userData", JSON.stringify(state.userData));
      }
    },

  }
})

export const { login, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;