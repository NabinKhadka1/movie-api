import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { searchURL, apiKey } from "./api";

export const searchMovies = createAsyncThunk(
  "moviepage/search",
  async (val) => {
    try {
      const resp = await axios.get(`${searchURL}${val}&api_key=${apiKey}`);
      return resp.data.results;
    } catch (err) {
      throw new Error("Sorry! Encountered an error");
    }
  }
);
const searchMovieSlice = createSlice({
  name: "searchMovie",
  initialState: {
    movies: [],
    loading: false,
    status: "",
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.loading = true;
      state.status = "pending";
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.loading = true;
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default searchMovieSlice.reducer;
