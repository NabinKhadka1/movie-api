import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { topRatedMovieURL } from "./api";

export const topRatedMoviesSlider = createAsyncThunk(
    "homepage/topRatedMovie",
    async() =>{
        try{
            const resp = await axios.get(topRatedMovieURL);
            return resp.data.results
        }catch(err){
            throw new Error('Sorry! Encountered an error')
        }
    }
)
const topRatedMovieSlice = createSlice({
    name: 'topratedmovie',
    initialState: {
        movies: [],
        loading: false,
        status: '',
        error: ''
    },
    extraReducers: (builder) =>{
        builder.addCase(topRatedMoviesSlider.pending,(state) =>{
            state.loading = true;
            state.status = 'pending';
        });
        builder.addCase(topRatedMoviesSlider.fulfilled, (state,action)=>{
            state.loading = false;
            state.movies = action.payload;
            state.status = 'fulfilled'
        });
        builder.addCase(topRatedMoviesSlider.rejected, (state,action)=>{
            state.loading = true;
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
})

export default topRatedMovieSlice.reducer;