import {FC} from "react";

import style from './PosterPreview.module.css'
import {imgURL, urls} from "../../constants";

interface IProps {
    poster_path:string,
    title: string
}

const PosterPreview:FC<IProps> = ({poster_path,title}) => {
    return (
        <div className={style.poster}>
            <img src={imgURL + urls.img.base(poster_path)} alt={title}/>
        </div>
    );
};

export {PosterPreview};
