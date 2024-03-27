import {FC} from "react";

import {IMovie} from "../../../interfaces";
import {Pagination} from "../../Pagination";
import {MovieListCard} from "../MovieListCard";
import style from './MovieListCards.module.css';

interface IProps {
    results: IMovie[],
    totalPages: number
}

const MovieListCards:FC<IProps> = ({results,totalPages}) => {

    return (
        <div className={style.container}>
            {results.map(result => <MovieListCard key={result.id} result={result} totalPages={totalPages}/>)}
            <Pagination total_pages={totalPages}/>
        </div>
    );
};

export {MovieListCards};
