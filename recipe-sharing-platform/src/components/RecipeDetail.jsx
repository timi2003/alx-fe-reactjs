import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundRecipe = recipeData.find(recipe => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading recipe...</div>;
  }

  if (!recipe) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe not found</h2>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800">Return to home page</Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-64 object-cover"
      />
      
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{recipe.summary}</p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc pl-6 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <ol className="list-decimal pl-6 space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>
        
        <div className="mt-8">
          <Link 
            to="/" 
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;