import {SubmitHandler, useForm} from "react-hook-form";
import {Navigate, Outlet, useNavigate} from "react-router-dom";

import {movieAction} from "../../store";
import {ISearch} from "../../interfaces";
import style from './MoviesPage.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";


const MoviesPage = () => {

    const {register, handleSubmit} = useForm<ISearch>();
    const {theme,searchParams} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const confirm:SubmitHandler<ISearch> = (search)=> {
        dispatch(movieAction.setSearchParams(search.search))
    };

    return (
        <div>
            <div className={`${style.searchBar} + ${theme ? style.dark : style.light}`}>
                <h1>MOVIES</h1>
                <p>Search for your favorite movies</p>
                <form className={style.search} onChange={handleSubmit(confirm)}>
                    <input type="text" placeholder={'Search Movies'} {...register('search')}/>
                </form>
                <div className={`${style.navigation} + ${theme ? style.darkFon : style.lightFon}`}>
                    <button disabled>All</button>
                    <button onClick={() => {
                        dispatch(movieAction.setSearchParams(null))
                        navigate('/genres')
                    }}>Genres </button>
                </div>
            </div>
            {searchParams && <Navigate to={`search/${searchParams}`}/> }
            <Outlet/>
        </div>
    );
};

export {MoviesPage};
