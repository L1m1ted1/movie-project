import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenres, IMovie, IMovies} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState {
    movies: IMovies,
    searchMovie: IMovies,
    genres: IGenres[],
    movie: IMovie,
    theme: boolean
}

const initialState: IState = {
    movies: null,
    searchMovie: null,
    genres: [],
    movie: null,
    theme: true
};

const getAll = createAsyncThunk<IMovies, void>(
    'movieSlice/getAllMovies',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        switcher: state => {
            state.theme = !state.theme
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })

})

const {reducer: movieReducer, actions} = movieSlice;

const movieAction = {
    ...actions
}

export {
    movieReducer,
    movieAction,
    getAll
}