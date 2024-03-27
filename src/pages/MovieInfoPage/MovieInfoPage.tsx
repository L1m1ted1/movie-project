import style from './MovieInfoPage.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {imgURL, urls} from "../../constants";
import {useEffect} from "react";
import {movieAction} from "../../store";
import {useNavigate, useParams} from "react-router-dom";
import {Rating} from "@mui/material";
import {Badges} from "../../components/Badges";



const MovieInfoPage = () => {

    const navigate = useNavigate();
    const query = useParams();
    const {theme} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.movies);

    const ids = query.id

    useEffect(() => {
        dispatch(movieAction.getById(+ids))
    }, [ids,dispatch]);

    console.log(movie?.genres)

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
                    <h2>Genres</h2>
                    <Rating name="read-only" value={movie?.vote_average/2} readOnly max={5}  precision={0.5}/>
                    <h2>Release date</h2>
                    <p>{movie?.release_date}</p>
                </div>
            </div>
        </div>
    );
}

export {MovieInfoPage};
