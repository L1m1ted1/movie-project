import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {movieAction} from "../../../store";
import {MovieListCards} from "../../MovieContainer";
import {useAppDispatch, useAppSelector} from "../../../hooks";

const Genres = () => {

    const params = useParams();
    const dispatch = useAppDispatch();
    const {moviesByGenres} = useAppSelector(state => state.movies);
    const [query] = useSearchParams({page:'1'});

    const page = query.get('page')

    const ids = params.query

    useEffect(() => {
        dispatch(movieAction.getByGenres({params: ids, page: page}))
    }, [ids, page,dispatch]);


    return (
        <div>
            {moviesByGenres?.results && <MovieListCards results={moviesByGenres?.results} totalPages={moviesByGenres?.total_pages}/>}
        </div>
    );
}

export {Genres};
