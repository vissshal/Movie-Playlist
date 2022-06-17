export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_SEARCH_MOVIES = "ADD_SEARCH_MOVIES";



// action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies,
        /*
        Ish step (movies:data) ki wajah se hi movies me data.js file se copy ho paa raha h
        Action is telling the type and also returning movies which is nothing but a copy of data.js file only
        Now ish "movies" (array) ko REDUCER as new STATE update karne k lie koshish karega such that "list" property me movies wala item store ho jaye qki STATE abb ek object hai na ki array using action.movies
        */
    }
}
export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie,
    }
}
export function removeFavourite(movie) {
    return {
        type: REMOVE_FAVOURITE,
        movie,
    }
}
export function showFavourites(value) {
    return {
        type: SHOW_FAVOURITES,
        value,
    }
}

export function searchMovie(title) {
    const url = `http://www.omdbapi.com/?apikey=f67d9a0f&t=${title}`;
    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie => {            
               dispatch(addSearchToList(movie));
            })
    }
}

export function addSearchToList(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie,
    }
}
export function addSearchToMovies(movie) {
    return {
        type: ADD_SEARCH_MOVIES,
        movie,
    }
}