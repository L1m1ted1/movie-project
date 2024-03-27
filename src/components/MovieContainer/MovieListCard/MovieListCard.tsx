import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {movieAction} from "../../../store";
import {StarsRating} from "../../StarsRating";
import style from './MovieListCard.module.css';
import {PosterPreview} from "../../PosterPreview";
import {useAppDispatch, useAppSelector} from "../../../hooks";

interface IProps {
    result: IMovie,
    totalPages: number
}
const MovieListCard:FC<IProps> = ({result,totalPages}) => {

    const navigate = useNavigate();
    const {theme} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const {id, poster_path, original_title, vote_average} = result;

    return (
        <div className={`${style.block} + ${theme ? style.dark : style.light}`} onClick={() => {
            dispatch(movieAction.setMovie(null))
            navigate(totalPages <= 500 ? `/movies/details/${id}` : `/details/${id}`)
        }}>
            <PosterPreview poster_path={poster_path} title={original_title}/>
            <StarsRating rating={vote_average}/>
            <h3>{original_title}</h3>
        </div>
    );
};

export {MovieListCard};
