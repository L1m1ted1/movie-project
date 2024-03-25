import axios from "axios";
import {baseURL} from "../constants";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request =>{
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTQ1YzAxM2FmYmY1YjI0MjZjNmU2ZTMwZDI2NTM4ZCIsInN1YiI6IjY1ZTM2MDU2ZmUwNzdhMDE4NTBmMWNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.inQ65QSZ6bdN4x4hZqo-s9oRNnoLFfWSQ2sIQBcsQDs'

    return request;
})

export {apiService}