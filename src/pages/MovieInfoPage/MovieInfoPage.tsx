import {useEffect} from "react";
import {Rating} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";

import {movieAction} from "../../store";
import {imgURL, urls} from "../../constants";
import style from './MovieInfoPage.module.css';
import {Badges} from "../../components/Badges";
import {useAppDispatch, useAppSelector} from "../../hooks";


const MovieInfoPage = () => {

    const navigate = useNavigate();
    const query = useParams();
    const {theme,movie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const ids = query.id

    useEffect(() => {
        dispatch(movieAction.getById(+ids))
    }, [ids,dispatch]);

    return (
        <div className={`${style.container} + ${theme ? style.dark : style.light}`}>
            <button onClick={() => navigate(-1)}>Back</button>
            <div className={style.poster}>
                <img src={imgURL + urls.img.base(movie?.backdrop_path)} alt="Backdrop"/>
                <div className={`${style.name} + ${theme ? style.dark : style.light}`}>
                    <h2>{movie?.original_title}</h2>
                </div>
            </div>

            {movie?.genres && <Badges key={ids} genders={movie?.genres}/>}
            <div className={style.avatar}>
                <img src={imgURL + urls.img.base(movie?.poster_path)} alt="Poster"/>
                <div className={style.title}>
                    <h2>Details</h2>
                    <p>{movie?.overview}</p>
                    <h2>Rating</h2>
                    <Rating name="read-only" value={movie?.vote_average/2} readOnly max={5}  precision={0.5}/>
                    <h2>Release date</h2>
                    <p>{movie?.release_date}</p>
                </div>
            </div>
        </div>
    );
}

export {MovieInfoPage};
