import {IMovie} from "./movieInterface";

export interface IMovies {
    page: number,
    results: IMovie[],
    total_pages: number
}