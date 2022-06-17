import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

/*
const thunk = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
        action(dispatch);
        return;
    }
     next(action);
}
*/
const store = createStore(rootReducer, applyMiddleware(thunk));
/*
createStore pe wo line isliye aa raha qki latest version of react doesn't recomment using createStore instead of 'Configure' 
store.dispatch({
    type: "ADD_MOVIES",
    movies: [{ Title: "Ranjhana", Plot: "Abhishek Bachhan played as a lead role", imdbRating: 8.9 }],
})
*/
export const StoreContext = createContext();

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>
    , document.getElementById('root')
);