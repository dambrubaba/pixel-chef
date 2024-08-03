// components/RecipeList.js
import React from 'react';
import { useAppContext } from '../context/AppContext';

const RecipeList = () => {
  const { recipes } = useAppContext();

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Your Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{recipe.name}</span>
            <div className="grid grid-cols-8 gap-1 mt-2">
              {recipe.pixels.map((color, i) => (
                <div
                  key={i}
                  style={{ backgroundColor: color }}
                  className="w-8 h-8 border border-gray-300"
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
