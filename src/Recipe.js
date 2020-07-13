import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
      <div className="calori-table"></div>
      <div className="calori">{calories.toFixed(0)} cal</div>
      <img className="image" src={image} alt={title} />
    </div>
  );
};

export default Recipe;
