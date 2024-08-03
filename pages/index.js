// pages/index.js
import Layout from '../components/Layout';
import Canvas from '../components/Canvas';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';
import CustomerFeedback from '../components/CustomerFeedback';
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

export default function Home() {
  const [currentPixels, setCurrentPixels] = useState([]);
  const [rating, setRating] = useState(4.5); // Example rating
  const { saveRecipe } = useAppContext();

  const handleSave = (pixels) => {
    setCurrentPixels(pixels);
  };

  const handleRecipeSave = (name) => {
    saveRecipe(name, currentPixels);
    setCurrentPixels([]);
  };

  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Welcome to Pixel Chef!</h2>
        <p className="mb-6">Create pixel-perfect dishes and share them with the world.</p>
        <Canvas onSave={handleSave} />
        <RecipeForm onSave={handleRecipeSave} />
        <RecipeList />
        <CustomerFeedback rating={rating} />
      </div>
    </Layout>
  );
}
