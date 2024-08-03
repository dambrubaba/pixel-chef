// context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const saveRecipe = (name, pixels) => {
    const newRecipe = { name, pixels };
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <AppContext.Provider value={{ recipes, saveRecipe }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
