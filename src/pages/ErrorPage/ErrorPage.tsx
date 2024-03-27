import style from './ErrorPage.module.css'
import {useAppSelector} from "../../hooks";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {

    const {theme} = useAppSelector(state => state.movies);

    const navigate = useNavigate();

    return (
        <div className={`${theme ? style.black : style.white} + ${style.error}`}>
            <div className={style.block}>
                <img src="/img/LostUrWay.svg" alt="Error"/>
                <h1>Lost Your Way?</h1>
                <p>Oops! This is awkward. You are looking for something that doesn't <br/> actually exist.</p>
            </div>
                <button onClick={() => navigate('')}>Go Home</button>
        </div>
    );
}

export {ErrorPage};
