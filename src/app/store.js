import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/sliderSlice";
import upcomingMoviesReducer from "../features/upcomingMovieSlice";
import topRatedMoviesReducer from "../features/topRatedMovieSlice";
import searchMoviesReducer from "../features/searchMovieSlice";
import searchMovieDetailReducer from "../features/searchMovieDetailSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    searchMovies: searchMoviesReducer,
    searchMovieDetail: searchMovieDetailReducer,
  },
});
export default store;
