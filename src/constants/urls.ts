const baseURL = 'https://api.themoviedb.org/3';
const imgURL = 'https://image.tmdb.org/t/p';


const movie = '/movie';
const genre = '/genre'



const urls = {
    movies: {
        base: (): string => `/discover${movie}?language=en-US`,
        byId: (id: number): string => `${movie}/${id}`,
        byGender: (params: string): string => `/discover${movie}?with_genres=${params}`,
        searchByTitle: (params: string) => `/search${movie}?query=${params}`
    },
    img: {
        base: (path: string) => `/w500/${path}`
    },
    genres: {
        base: ():string => `${genre}/movie/list`
    }
};

export {
    baseURL,
    imgURL,
    urls
};
