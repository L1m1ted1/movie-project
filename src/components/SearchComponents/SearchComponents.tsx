import {Navigate, useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../store";
import {MovieListCards} from "../MovieContainer";

const SearchComponents = () => {


    const [query] = useSearchParams({page: '1'});
    const {searchParams, searchMovie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const params = useParams();
    console.log(params.query)

    const page = query.get('page')

    useEffect(() => {
        dispatch(movieAction.getByTitle({params: searchParams, page: page}))
    }, [searchParams, page,dispatch]);

    return (
        <div>
            {searchParams ? null : <Navigate to={'/movies'}/>}
            {searchMovie && <MovieListCards results={searchMovie?.results} totalPages={searchMovie?.total_pages}/>}
        </div>
    );
}

export {SearchComponents};
