
import {urls} from "../constants";
import {IMovie, IMovies} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";


const movieService = {
    getAll: (): IRes<IMovies> => apiService.get(urls.movies.base()),
    getById: (id: number): IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    getByTitle: (params: string, page = '1'): IRes<IMovies> => apiService.get(urls.movies.searchByTitle(params), {params: {page}})
};

export {movieService}
