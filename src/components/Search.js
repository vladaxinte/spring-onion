import React, { Component } from 'react';
import { SearchIcon } from "../shared/SVGFactory";

class Search extends Component {
    render() { 
        return ( 
        <div className="search-field">
            <SearchIcon />
            <input type="text" className="search" placeholder="Search" /> 
        </div>
        );
    }
}
 
export default Search;