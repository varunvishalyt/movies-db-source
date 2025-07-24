const API_KEY = "360fb999fbd53b080963d6ad4aec3e07"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await res.json()
    return data.results
};

export const searchMovies = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`)
    const data = await res.json();
    return data.results;
};