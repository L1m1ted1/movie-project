import style from './Badges.module.css'
import Badge from '@mui/material/Badge';
import {FC} from "react";
import {IGenre} from "../../interfaces";


interface IProps {
    genders: IGenre[]
}

const Badges:FC<IProps> = ({genders}) => {

    console.log(genders)

    return (
        <div className={style.badges}>
            {genders.map(genre => <Badge badgeContent={genre.name} color="primary"/>)}
        </div>
    );
};

export {Badges};
