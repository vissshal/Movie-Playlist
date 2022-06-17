import React from "react";
import { StoreContext } from '../index';
import Navbar from './Navbar';
import { data } from '../data';
import MovieCard from './MovieCard';
import { addMovies, showFavourites } from "../actions";

class AppWrapper extends React.Component {
  render() {
    return (
      < StoreContext.Consumer >
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
      )
  }
}

class App extends React.Component {
  
  componentDidMount() {
    const { store } = this.props;
    store.dispatch(addMovies(data))
    // dispatch ke baad hi movies/store me data se copy ho paya h .. ultimate step yahi h 
    store.subscribe(() => {
      this.forceUpdate()
    })
    this.setState({
    })
  }

  display = (value) => {
    const { store } = this.props;
    store.dispatch(showFavourites(value))
    this.setState({
    })
  }

  render() {
    const { movies, search } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">

        <Navbar store={this.props.store} search={search} />

        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.display(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.display(true)}>Favourites</div>
          </div>
          <br /><br />
          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                  store={this.props.store}
                  display={this.display}
                />
              )
            }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AppWrapper;
