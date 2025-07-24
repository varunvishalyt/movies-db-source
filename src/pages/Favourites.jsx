import "../css/Favorites.css"
import { useMovieContext } from "../context/movieContext"
import MovieCard from "../components/MovieCard"


export default function Favourites(){
    const { favourites } = useMovieContext();

    if(favourites) {
        return(
            <div className="favorites">
                <div className="movies-grid">{favourites.map((movie) => {
                    return <MovieCard movie={movie} key={movie.id}/>
                })}</div>
            </div>)
    }
    else{
        return(
        <div className="favourites-empty">
            <h2>No Favourite movies yet...</h2>
            <p>Start Adding some movies in your favourites</p>
        </div>
    )
    }
}