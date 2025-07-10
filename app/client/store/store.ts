import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./authSlice";
import themeReducer from './themeSlice'

const store = configureStore({
    reducer:{ 
      auth:  useReducer,
      theme:themeReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;