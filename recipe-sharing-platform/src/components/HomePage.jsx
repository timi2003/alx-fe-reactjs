import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setRecipes(recipeData);
  }, []);

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Delicious Recipes</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {recipes.map(recipe => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-3 sm:p-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{recipe.title}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{recipe.summary}</p>
              <Link 
                to={`/recipe/${recipe.id}`} 
                className="inline-block bg-indigo-600 text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-md hover:bg-indigo-700 transition"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;