"use client";
import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// https://dummyapi.online/api/movies

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
});

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: [],
    allMoviesStatus: "idle",
    allMoviesError: null,
  } as any,

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.allMoviesStatus = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.allMoviesStatus = "sucess";
        state.allMovies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.allMoviesStatus = "error";
      });
  },
});

export default MoviesSlice.reducer;
