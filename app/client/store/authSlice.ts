import { createSlice } from "@reduxjs/toolkit";


interface UserData {
  username: string;
  email: string;
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
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true,
            state.userData=action.payload
        },

        logout:(state)=>{
            state.status=false,
            state.userData=null
        }

    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;