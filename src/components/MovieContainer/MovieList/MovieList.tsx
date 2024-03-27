import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieAction} from "../../../store";
import {useEffect} from "react";
import {MovieListCards} from "../MovieListCards";

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
