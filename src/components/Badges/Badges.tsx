import {FC} from "react";
import Badge from '@mui/material/Badge';

import style from './Badges.module.css'
import {IGenre} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    genders: IGenre[]
}

const Badges:FC<IProps> = ({genders}) => {

    return (
        <div className={style.badges}>
            {genders.map(genre =>  <Link to={`/genres/${genre.id}`} key={genre.id}><Badge badgeContent={genre.name} key={genre.id} color="primary"/></Link>)}
        </div>
    );
};

export {Badges};
