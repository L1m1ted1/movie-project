import {createBrowserRouter, Navigate} from "react-router-dom";

import {ErrorPage, GenresPage, MovieInfoPage, MoviesPage} from "./pages";
import {MovieList, SearchComponents} from "./components";
import {MainLayout} from "./layouts";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/> , children: [
                    {
                        path: '', element: <MovieList/>
                    },
                    {
                        path: 'search/:query', element: <SearchComponents/>
                    },
                    {
                        path: ':id', element: <MovieInfoPage/>
                    }
                ]
            },
            {
                path: 'details/:id', element: <MovieInfoPage/>
            },
            {
                path: 'genres', element: <GenresPage/>
            }
        ]
    }
]);

export {router}