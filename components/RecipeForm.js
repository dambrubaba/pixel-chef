// components/RecipeForm.js
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const RecipeForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const { saveRecipe } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;

    onSave(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Save Recipe
      </button>
    </form>
  );
};

export default RecipeForm;
