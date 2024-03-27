import {createBrowserRouter, Navigate} from "react-router-dom";

import {ErrorPage, GenresPage, MovieInfoPage, MoviesPage} from "./pages";
import {MovieList, SearchComponents} from "./components";
import {MainLayout} from "./layouts";
import {Genres} from "./components/GenresContainer";

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
                        path: 'details/:id', element: <MovieInfoPage/>
                    }
                ]
            },
            {
                path: 'details/:id', element: <MovieInfoPage/>
            },
            {
                path: 'genres', element: <GenresPage/>, children: [
                    {
                        path: ':query', element: <Genres/>
                    }
                ]
            }
        ]
    }
]);

export {router}