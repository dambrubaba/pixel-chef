// components/Layout.js
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-red-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Pixel Chef</h1>
      </header>
      <main className="p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 mt-4">
        &copy; 2024 Pixel Chef
      </footer>
    </div>
  );
}
