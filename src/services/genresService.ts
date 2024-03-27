import {urls} from "../constants";
import {IGenres} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";

const genresService = {
    getAll: (): IRes<IGenres> => apiService.get(urls.genres.base(), {})
};

export {genresService}