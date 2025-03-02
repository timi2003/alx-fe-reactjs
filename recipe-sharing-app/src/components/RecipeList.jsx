import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/useRecipeStore';

const RecipeList = () => {
  const navigate = useNavigate();
  const { filteredRecipes, favorites, addFavorite, removeFavorite, deleteRecipe } = useRecipeStore();
  
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
  };

  const handleDeleteRecipe = (e, recipeId) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
    }
  };

  const handleEditRecipe = (e, recipeId) => {
    e.stopPropagation();
    navigate(`/edit/${recipeId}`);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">All Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found. Add your first recipe!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <div 
              key={recipe.id}
              className="border rounded-lg shadow-md hover:shadow-lg transition cursor-pointer p-4"
              onClick={() => handleViewDetails(recipe.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{recipe.title}</h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={(e) => handleFavoriteToggle(e, recipe.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    {favorites.includes(recipe.id) ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <button 
                    onClick={(e) => handleEditRecipe(e, recipe.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={(e) => handleDeleteRecipe(e, recipe.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{recipe.description}</p>
              {recipe.prepTime && (
                <p className="text-sm text-gray-600">Prep time: {recipe.prepTime} minutes</p>
              )}
              {recipe.ingredients && recipe.ingredients.length > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  Ingredients: {recipe.ingredients.slice(0, 3).join(', ')}
                  {recipe.ingredients.length > 3 && '...'}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;