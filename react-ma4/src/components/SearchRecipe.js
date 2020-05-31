import React from "react";
import PropTypes from "prop-types";

function SearchRecipe({ handleSearch }) {

    return (
        <div className="SearchRecipe">
            <input
                type="text"
                placeholder="Search here"
                onChange={event => handleSearch(event)}>
            </input>
        </div>
    );
}

SearchRecipe.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default SearchRecipe;
