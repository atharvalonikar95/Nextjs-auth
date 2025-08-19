import { createSlice } from "@reduxjs/toolkit";


interface UserData {
  username: string;
  firstname:string;
  lastname:string;
  email: string;
  id:any;
  image: string ;
}

interface AuthState {
  status: boolean;
  userData: UserData | null;
}

const initialState: AuthState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true,
        state.userData = action.payload
    },

    logout: (state) => {
      state.status = false,
        state.userData = null
    },
    updateUser(state, action) {
      if (state.userData) {
        state.userData = {
          ...state.userData,
          ...action.payload,
        };
      }
    },

  }
})

export const { login, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;