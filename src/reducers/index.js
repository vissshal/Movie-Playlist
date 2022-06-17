import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  REMOVE_FAVOURITE,
  ADD_FAVOURITE,
  SHOW_FAVOURITES,
  ADD_SEARCH_RESULT,
  ADD_SEARCH_MOVIES,
} from "../actions";

export default combineReducers({
  movies,
  search,
});

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
const initialSearchState = {
  result: {},
  showSearch: false,
};

export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_SEARCH_MOVIES:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
        // this is the code to create a new array such that on first index we want a different element and on rest position we are just copy the elements of another array
      };
    case REMOVE_FAVOURITE:
      const filteredArray = state.favourites.filter(
        (remove) => action.movie !== remove
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.value,
      };
    default:
      return state;
  }
}

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearch: true,
      };
    default:
      return state;
  }
}

/*
    Since, REDUCER returns a new state so whatever it will do that will reside in the store and not the ACTION's state i.e  REDUCER's state is the final state
    Since our earlier state used to be an array so return would also be in the form of an array only but now it has been converted into an object thus action.movies won't work while direct returning but we can return it inside the object
    Hence now we will be getting return in the form of an object only as both arguement and return datatype remains same
*/
