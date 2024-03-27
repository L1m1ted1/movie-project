
import {urls} from "../constants";
import {IMovie, IMovies} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";


const movieService = {
    getAll: (page: string): IRes<IMovies> => apiService.get(urls.movies.base(), {params: {page}}),
    getById: (id: number): IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    getByTitle: (params: string, page: string): IRes<IMovies> => apiService.get(urls.movies.searchByTitle(params), {params: {page}}),
    getByGenres: (params: string, page: string): IRes<IMovies> => apiService.get(urls.movies.byGender(params), {params: {page}})
};

export {movieService}
