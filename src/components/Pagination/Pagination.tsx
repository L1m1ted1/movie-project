import {useSearchParams} from "react-router-dom";

import style from './Pagination.module.css'
import {useAppSelector} from "../../hooks";
import {FC} from "react";

interface IProps {
    total_pages: number
}

const Pagination:FC<IProps> = ({total_pages}) => {

    const {theme} = useAppSelector(state => state.movies);

    const [query, setQuery] = useSearchParams({page:'1'});

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())

            return prev
        });
    };
    const next = () => {
        setQuery(next => {
            next.set('page', (+next.get('page') + 1).toString())

            return next
        });
    };

    const page = query.get('page')


    return (
        <div className={style.container}>
            <div className={style.prevNext}>
                <div className={`${style.buttons} + ${theme ? style.dark : style.light}`}>
                    <button
                        disabled={page === '1'}
                        onClick={prev}>Back
                    </button>
                    <div className={theme ? style.dark : style.light}>
                        <p>{page}</p>
                    </div>
                    <button
                        disabled={total_pages  ? page === `${total_pages}` : page === '500'}
                        onClick={next}>Forward
                    </button>
                </div>
            </div>
        </div>
    );
};

export {Pagination};
