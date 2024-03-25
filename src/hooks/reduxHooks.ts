import {AppDispatch, RootState} from "../types";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
const useAppDispatch = () => useDispatch<AppDispatch>()


export {
    useAppSelector,
    useAppDispatch
}
