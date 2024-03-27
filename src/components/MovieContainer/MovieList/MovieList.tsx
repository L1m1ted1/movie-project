import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {movieAction} from "../../../store";
import {MovieListCards} from "../MovieListCards";
import {useAppDispatch, useAppSelector} from "../../../hooks";

const MovieList = () => {

    const [query] = useSearchParams({page:'1'});
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies);

    const page = query.get('page')

    useEffect(() => {
        dispatch(movieAction.getAll(page))
    }, [page,dispatch]);

    const results = movies?.results

    return (
        <div>
            {movies && <MovieListCards results={results} totalPages={movies?.total_pages}/>}
        </div>
    );
};

export {MovieList};
