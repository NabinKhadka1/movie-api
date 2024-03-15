import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { searchDetailURL, apiKey } from "./api";

export const searchDetail = createAsyncThunk(
  "moviepage/searchDetail",
  async (val) => {
    try {
      const resp = await axios.get(
        `${searchDetailURL}${val}?api_key=${apiKey}`
      );
      return resp.data;
    } catch (err) {
      throw new Error("Sorry! Encountered an error");
    }
  }
);
const searchMovieDetailSlice = createSlice({
  name: "searchMovieDetail",
  initialState: {
    movie: {},
    loading: false,
    status: "",
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(searchDetail.pending, (state) => {
      state.loading = true;
      state.status = "pending";
    });
    builder.addCase(searchDetail.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.movie = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(searchDetail.rejected, (state, action) => {
      state.loading = true;
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default searchMovieDetailSlice.reducer;
