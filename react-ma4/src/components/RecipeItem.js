import React from "react";
import PropTypes from "prop-types";


function RecipeItem({ title, thumbnail }) {

    return (
        <div className="RecipeItem">
            <h2>{ title }</h2>
            <img src={ thumbnail } alt="Recipe" />
        </div>
    );
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string
};

export default RecipeItem;
