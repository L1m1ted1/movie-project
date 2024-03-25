import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer
    }
})

export default store