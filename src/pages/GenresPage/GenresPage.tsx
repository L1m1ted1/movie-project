import {useEffect} from "react";
import {Outlet, useNavigate, useParams} from "react-router-dom";

import {movieAction} from "../../store";
import style from './GendersPage.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";

const GenresPage = () => {

    const {theme} = useAppSelector(state => state.movies);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieAction.getGenres())
    }, [dispatch]);

    const strings = useParams();
    const query = +strings.query

    return (
        <div>
            <div className={`${style.searchBar} + ${theme ? style.dark : style.light}`}>
                <h1>GENRES</h1>
                <p>Сhoose your favorite genres</p>
                <div className={`${style.genres} + ${theme ? style.darkFon : style.lightFon}`}>
                    {genres?.genres.map(genre => <button disabled={query === genre.id} key={genre.id} onClick={() => navigate(`/genres/${genre.id}`)}>{genre.name}</button>)}
                </div>
                <div className={`${style.navigation} + ${theme ? style.darkFon : style.lightFon}`}>
                    <button onClick={() => navigate('/movies')}>All</button>
                    <button disabled >Genres</button>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export {GenresPage};
