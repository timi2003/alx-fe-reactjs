import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './useRecipeStore';

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
  });
  
  const [formErrors, setFormErrors] = useState({});

  // Load recipe data
  useEffect(() => {
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (recipe) {
      setFormData({
        title: recipe.title || '',
        description: recipe.description || '',
        ingredients: recipe.ingredients ? recipe.ingredients.join(', ') : '',
        instructions: recipe.instructions || '',
        prepTime: recipe.prepTime?.toString() || '',
      });
    } else {
      // Recipe not found, redirect to home
      navigate('/');
    }
  }, [recipeId, recipes, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    }
    
    if (!formData.ingredients.trim()) {
      errors.ingredients = 'At least one ingredient is required';
    }
    
    if (!formData.instructions.trim()) {
      errors.instructions = 'Instructions are required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const updatedRecipe = {
      id: recipeId,
      title: formData.title,
      description: formData.description,
      ingredients: formData.ingredients.split(',').map(item => item.trim()),
      instructions: formData.instructions,
      prepTime: formData.prepTime ? parseInt(formData.prepTime) : 0,
      updatedAt: new Date().toISOString()
    };
    
    updateRecipe(updatedRecipe);
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Edit Recipe</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="title" className="block font-medium">
            Recipe Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${formErrors.title ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter recipe title"
          />
          {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="description" className="block font-medium">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className={`w-full p-2 border rounded ${formErrors.description ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Brief description of your recipe"
          ></textarea>
          {formErrors.description && <p className="text-red-500 text-sm">{formErrors.description}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="ingredients" className="block font-medium">
            Ingredients <span className="text-red-500">*</span>
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="4"
            className={`w-full p-2 border rounded ${formErrors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter ingredients separated by commas (e.g., 2 cups flour, 1 tsp salt, 3 eggs)"
          ></textarea>
          {formErrors.ingredients && <p className="text-red-500 text-sm">{formErrors.ingredients}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="instructions" className="block font-medium">
            Instructions <span className="text-red-500">*</span>
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="6"
            className={`w-full p-2 border rounded ${formErrors.instructions ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Step-by-step cooking instructions"
          ></textarea>
          {formErrors.instructions && <p className="text-red-500 text-sm">{formErrors.instructions}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="prepTime" className="block font-medium">
            Preparation Time (minutes)
          </label>
          <input
            type="number"
            id="prepTime"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange}
            min="0"
            className="w-full p-2 border rounded border-gray-300"
            placeholder="Estimated preparation time in minutes"
          />
        </div>
        
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={() => navigate(`/recipe/${recipeId}`)}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;