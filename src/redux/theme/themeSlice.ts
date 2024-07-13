import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    theme : 'light' //setting the initial theme as light

}

const themeSlice = createSlice({
    name : 'theme',
    initialState,
    reducers : {
       toggleTheme : (state) => {
        state.theme = state.theme === 'light' ? 'dark' : 'light'  //toggling the light and dark theme
       }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer ; 
