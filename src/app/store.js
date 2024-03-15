import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/sliderSlice";
import upcomingMoviesReducer from "../features/upcomingMovieSlice"
import topRatedMoviesReducer from "../features/topRatedMovieSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        upcomingMovies: upcomingMoviesReducer,
        topRatedMovies: topRatedMoviesReducer
    }
})
export default store;