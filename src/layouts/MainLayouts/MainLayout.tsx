import {Outlet} from "react-router-dom";

import style from './MainLayout.module.css'
import {Header} from "../../components";
import {useAppSelector} from "../../hooks";

const MainLayout = () => {

    const {theme} = useAppSelector(state => state.movies);

    return (
        <div className={theme ? style.black : style.white}>
            <div className={style.container}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};
