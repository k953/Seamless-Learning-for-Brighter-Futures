import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>{calories} Calories</p>
      <img src={image} alt={title} />
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;

