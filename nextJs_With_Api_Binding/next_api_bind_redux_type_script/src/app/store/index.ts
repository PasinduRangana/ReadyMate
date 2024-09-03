import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./movieSlice";

export function makeStore(){
return configureStore({
  reducer: {
    movies: MoviesSlice,
  },
});
}

export const store = makeStore()
export type RootSate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch