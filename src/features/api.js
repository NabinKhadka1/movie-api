export const apiKey = import.meta.env.VITE_API_KEY;

export const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const upcomingMovieURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
export const topRatedMovieURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
export const searchURL = `https://api.themoviedb.org/3/search/movie?query=`;
export const searchDetailURL = `https://api.themoviedb.org/3/movie/`;


export const imgPath = import.meta.env.VITE_IMG_PATH;
