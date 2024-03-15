import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";

export const moviesSlider = createAsyncThunk(
    "homepage/slider",
    async() =>{
        try{
            const resp = await axios.get(url);
            return resp.data.results
        }catch(err){
            throw new Error('Sorry! Encountered an error')
        }
    }
)
const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        movies: [],
        loading: false,
        status: '',
        error: ''
    },
    extraReducers: (builder) =>{
        builder.addCase(moviesSlider.pending,(state) =>{
            state.loading = true;
            state.status = 'pending';
        });
        builder.addCase(moviesSlider.fulfilled, (state,action)=>{
            state.loading = false;
            state.movies = action.payload;
            state.status = 'fulfilled'
        });
        builder.addCase(moviesSlider.rejected, (state,action)=>{
            state.loading = true;
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
})

export default sliderSlice.reducer;