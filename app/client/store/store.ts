import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./authSlice";

const store = configureStore({
    reducer:{ 
      auth:  useReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;