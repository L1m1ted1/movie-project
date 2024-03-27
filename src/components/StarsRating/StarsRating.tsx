import {Rating} from "@mui/material";
import style from './StarsRating.module.css'
import {FC} from "react";

interface IProps {
    rating: number
}

const StarsRating:FC<IProps> = ({rating}) => {
    return (
        <div className={style.stars}>
            <Rating name="read-only" value={rating/2} readOnly max={5}  precision={0.5}/>
        </div>
    );
};

export {StarsRating};
