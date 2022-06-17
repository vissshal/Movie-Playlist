import React from "react";
import { addSearchToMovies, searchMovie } from "../actions";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',

        }
    }

    handleSearchBar = (catchSearch) => {
        this.state.searchText = catchSearch.target.value;
    }

    handleSubmit = () => {
        const { searchText } = this.state;
        this.props.store.dispatch(searchMovie(searchText));
        
        // this.state.searchText = document.getElementById('search-bar').value;
    }
    handleSearchResults = (result) => {
        this.props.store.dispatch(addSearchToMovies(result));
        this.props.search.showSearch=false;
    }

    render() {
        const { result, showSearch } = this.props.search;
        return (

            <div className="nav">
                <div className="search-container">
                    <input placeholder="Search here ... " onChange={this.handleSearchBar} id='search-bar' />
                    <button id='search-btn' type="submit" onClick={this.handleSubmit}>Search</button>
                    {
                        showSearch
                            ?
                            <div className="search-results">
                                <div className="search-result">
                                    <img alt="movie-poster" src={result.Poster} />
                                    <div className="movie-info">
                                        <span>
                                            {result.Title}
                                        </span>
                                        <span style={{ fontWeight: 400, fontSize: 14 }}>
                                            Directed by {result.Director}
                                        </span>
                                        <button style={{ width: 140 }} onClick={() => this.handleSearchResults(result)}>
                                            Add to Movies
                                        </button>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                    }
                </div>
            </div>

        );
    }
}

export default Navbar;
