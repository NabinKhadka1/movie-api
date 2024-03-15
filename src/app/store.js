import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/sliderSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer
    }
})
export default store;