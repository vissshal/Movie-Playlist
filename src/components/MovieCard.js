import React from "react";
import { addFavourite, removeFavourite } from "../actions";

class MovieCard extends React.Component {

    handleFavourites = () => {
        const { movie, store } = this.props;
        store.dispatch(addFavourite(movie));
    }
    handleunfavourites = () => {
        const { movie, store, display } = this.props;
        store.dispatch(removeFavourite(movie));
        if (store.getState().movies.showFavourites == true) {
            display(true);
        }
    }

    isMovieFav = (movie) => {
        const { favourites } = this.props.store.getState().movies;
        const index = favourites.indexOf(movie);
        if (index !== -1) {
            return true;
        }
        else {
            return false;
        }

    }

    render() {
        const { movie } = this.props;

        return (
            <div>
                <div className="movie-card">
                    <div className="left">
                        <img alt="movie-poster" src={movie.Poster} />
                    </div>
                    <div className="right">
                        <div className="title">{movie.Title}</div>
                        <div className="plot">{movie.Plot}</div>
                        <div className="footer">
                            <div className="rating">{movie.imdbRating}</div>
                            {
                                this.isMovieFav(movie)
                                    ? <button className="favourite-btn" onClick={this.handleunfavourites}>Unfavourite</button>
                                    : <button className="unfavourite-btn" onClick={this.handleFavourites}>Favourite</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;
