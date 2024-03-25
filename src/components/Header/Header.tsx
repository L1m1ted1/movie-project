import style from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";

const Header = () => {

    const {theme} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();



    return (
        <div>

        </div>
    );
};

export {Header};
