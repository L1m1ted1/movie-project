import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenres, IMovie, IMovies} from "../../interfaces";
import {AxiosError} from "axios";
import {genresService, movieService} from "../../services";

interface IState {
    movies: IMovies,
    searchParams: string,
    searchMovie: IMovies,
    moviesByGenres: IMovies,
    genres: IGenres,
    movie: IMovie,
    theme: boolean
}

const initialState: IState = {
    movies: null,
    searchParams: null,
    searchMovie: null,
    moviesByGenres: null,
    genres: null,
    movie: null,
    theme: true
};

const getAll = createAsyncThunk<IMovies, string>(
    'movieSlice/getAll',
    async (page,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const getByTitle = createAsyncThunk<IMovies, { params: string, page: string }>(
    'movieSlice/getByTitle',
    async ({params, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByTitle(params, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);
const getById = createAsyncThunk<IMovie, number>(
    'movieSlice/getById',
    async (id,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getGenres = createAsyncThunk<IGenres, void>(
    'movieSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getByGenres = createAsyncThunk<IMovies, { params: string, page: string }>(
    'movieSlice/getByGenres',
    async ({params, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenres(params, page);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        switcher: state => {
            state.theme = !state.theme
        },
        setSearchParams: (state, actions) => {
            state.searchParams = actions.payload
        },
        setMovie: (state, actions) =>{
            state.movie = actions.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getByTitle.fulfilled, (state,actions) => {
                state.searchMovie = actions.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenres.fulfilled, (state, action) => {
                state.moviesByGenres = action.payload
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieAction = {
    ...actions,
    getAll,
    getByTitle,
    getById,
    getGenres,
    getByGenres
}

export {
    movieReducer,
    movieAction,
}