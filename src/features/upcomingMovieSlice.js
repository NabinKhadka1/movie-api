import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { upcomingMovieURL } from "./api";

export const upcomingMoviesSlider = createAsyncThunk(
    "homepage/upcomingMovie",
    async() =>{
        try{
            const resp = await axios.get(upcomingMovieURL);
            return resp.data.results
        }catch(err){
            throw new Error('Sorry! Encountered an error')
        }
    }
)
const upcomingMovieSlice = createSlice({
    name: 'upcomingmovie',
    initialState: {
        movies: [],
        loading: false,
        status: '',
        error: ''
    },
    extraReducers: (builder) =>{
        builder.addCase(upcomingMoviesSlider.pending,(state) =>{
            state.loading = true;
            state.status = 'pending';
        });
        builder.addCase(upcomingMoviesSlider.fulfilled, (state,action)=>{
            state.loading = false;
            state.movies = action.payload;
            state.status = 'fulfilled'
        });
        builder.addCase(upcomingMoviesSlider.rejected, (state,action)=>{
            state.loading = true;
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
})

export default upcomingMovieSlice.reducer;