import {createSlice} from "@reduxjs/toolkit";
import themes from "../Utils/Theme";

const appSlice = createSlice ({
    name: 'app',
    initialState: {
        loading: false,
        theme: themes.light,
        currentTheme: "light"
    },
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = false;
        },
        switchTheme: (state) => {
            const newTheme = state.currentTheme === "light" ? "dark" : "light";
            state.currentTheme = newTheme;
            state.theme = themes[newTheme];
        }
    }
})

export const {startLoading,stopLoading, switchTheme} = appSlice.actions;

export default appSlice.reducer;