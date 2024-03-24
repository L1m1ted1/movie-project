import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/> , children: [
                    {
                        path: '', element: <MoviesList/>
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

