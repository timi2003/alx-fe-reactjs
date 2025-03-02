import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './useRecipeStore';

const RecommendationsList = () => {
  const navigate = useNavigate();
  const { recommendations, generateRecommendations, favorites, addFavorite, removeFavorite } = useRecipeStore();
  
  // Generate recommendations if not already done
  useEffect(() => {
    if (recommendations.length === 0) {
      generateRecommendations();
    }
  }, [recommendations.length, generateRecommendations]);

  const handleViewDetails = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  const handleFavoriteToggle = (e, recipeId) => {
    e.stopPropagation();
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
    // Regenerate recommendations after changing favorites
    setTimeout(() => generateRecommendations(), 0);
  };

  // If no recommendations or favorites are empty, don't display
  if (recommendations.length === 0 || favorites.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recommendations For You</h2>
      <p className="text-gray-600 mb-4">Based on your favorite recipes</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map(recipe => (
          <div 
            key={recipe.id}
            className="border border-blue-200 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer p-4"
            onClick={() => handleViewDetails(recipe.id)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <button 
                onClick={(e) => handleFavoriteToggle(e, recipe.id)}
                className="text-red-500 hover:text-red-700"
              >
                {favorites.includes(recipe.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
            <p className="text-gray-700 mb-2">{recipe.description}</p>
            
            <div className="mt-2">
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Recommended</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;