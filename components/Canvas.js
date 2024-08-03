// components/Canvas.js
import React, { useState } from 'react';

const Canvas = ({ onSave }) => {
  const [pixels, setPixels] = useState(Array(64).fill('#ffffff'));

  const updatePixel = (index, color) => {
    const newPixels = [...pixels];
    newPixels[index] = color;
    setPixels(newPixels);
  };

  const handleSave = () => {
    onSave(pixels);
  };

  return (
    <div>
      <div className="grid grid-cols-8 gap-1 mb-4">
        {pixels.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className="w-8 h-8 border border-gray-300 cursor-pointer"
            onClick={() => updatePixel(index, '#000000')}
          />
        ))}
      </div>
      <button
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        onClick={handleSave}
      >
        Save Recipe
      </button>
    </div>
  );
};

export default Canvas;
