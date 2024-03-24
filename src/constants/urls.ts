const baseURL = 'https://api.themoviedb.org/3';
const imgURL = 'https://image.tmdb.org/t/p';


const movie = '/movie';

const urls = {
    movies: {
        base: (): string => `/discover${movie}?language=en-US`,
        byId: (id: number): string => `${movie}/${id}`,
        gender: (): string => `/genre${movie}/list`,
        searchByTitle: (params: string) => `/search${movie}?query=${params}`
    },
    img: {
        base: (path: string) => `/w500/${path}`
    }
};

export {
    baseURL,
    imgURL,
    urls
};
