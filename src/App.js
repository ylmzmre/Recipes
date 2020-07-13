import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "f141c767";
  const APP_KEY = "141757c8651d06c0b0c3860a618c6751";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setquery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log("data", data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) =>{
    e.preventDefault();
    setquery(search);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      <div className="recipes">
      {recipes.map((item, index) => (
        <Recipe
          key={index}
          title={item.recipe.label}
          calories={item.recipe.calories}
          image={item.recipe.image}
          ingredients={item.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
