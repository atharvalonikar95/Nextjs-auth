import { createSlice } from "@reduxjs/toolkit";

type themeState={
    mode:'light' | 'dark'
}

const initialState:themeState={
    mode:'light'
}


const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleMode:(state)=>{
            state.mode= state.mode=== 'light'? 'dark' : 'light'
        }

    }

})

export const {toggleMode} = themeSlice.actions;

export default themeSlice.reducer;