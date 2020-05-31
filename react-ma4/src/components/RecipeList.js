import React, { useState, useEffect } from "react";
import RecipeItem from "./RecipeItem";
import SearchRecipe from "./SearchRecipe";

function RecipeList() {
    const url = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";
    const [recipes, setRecipes] = useState ([]);
    const [filteredRecipes, setFilteredRecipes] = useState ([]);

    useEffect ( () => {
        fetch (url)
            .then(response => response.json() )
            .then(json => {
                console.log(json.results);
                setRecipes(json.results);
                setFilteredRecipes(json.results);
            })
            .catch(error => console.log(error));
    }, []);


    // Got function from Noroff Javascript Frameworks MA4 Lesson
    const filterRecipes = function(e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = recipes.filter(function(char)
        {
            const lowerCaseName = char.title.toLowerCase();
            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });
        setFilteredRecipes(filteredArray);
    };

    return (
    <>
        <SearchRecipe handleSearch={ filterRecipes } />
        <div className="row">
            {filteredRecipes.map((recipe, id) => {
                const { thumbnail, title } = recipe;

                return (
                    <RecipeItem key={ id } title={ title } thumbnail={ thumbnail } />
                );
            })}
        </div>
    </>
    );
}

export default RecipeList;
