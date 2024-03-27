import {IGenre} from "./genreInterface";

export interface IMovie {
    id: number,
    original_title: string,
    poster_path: string,
    vote_average: number,
    backdrop_path: string,
    overview: string,
    genres: IGenre [],
    release_date: number,
    spoken_languages: string
}
