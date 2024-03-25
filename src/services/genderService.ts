
import {urls} from "../constants";
import {IGenres} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";

const genderService: IRes<IGenres[]> = apiService.get(urls.genres.base());

export {genderService}