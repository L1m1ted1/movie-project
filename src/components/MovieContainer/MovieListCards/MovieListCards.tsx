import style from './MovieListCards.module.css'
import {IMovie} from "../../../interfaces";
import {FC} from "react";
import {Pagination} from "../../Pagination";
import {MovieListCard} from "../MovieListCard";

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
