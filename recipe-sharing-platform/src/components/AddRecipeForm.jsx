import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipeForm() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: 'https://via.placeholder.com/400x300', // Default image
    ingredients: '',
    instructions: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: e.target.value
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.summary.trim()) {
      newErrors.summary = 'Summary is required';
    }
    
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      // Check if there are at least two ingredients
      const ingredientLines = formData.ingredients.split('\n').filter(line => line.trim());
      if (ingredientLines.length < 2) {
        newErrors.ingredients = 'Please add at least two ingredients';
      }
    }
    
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Instructions are required';
    } else {
      // Check if there are at least two steps
      const instructionLines = formData.instructions.split('\n').filter(line => line.trim());
      if (instructionLines.length < 2) {
        newErrors.instructions = 'Please add at least two instruction steps';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, we would submit this data to an API
      console.log('Form submitted:', formData);
      
      // Process the ingredients and instructions from text to arrays
      const processedData = {
        ...formData,
        ingredients: formData.ingredients.split('\n').filter(line => line.trim()),
        instructions: formData.instructions.split('\n').filter(line => line.trim())
      };
      
      console.log('Processed data:', processedData);
      
      // Show success message and redirect
      alert('Recipe added successfully!');
      navigate('/');
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Recipe</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200'
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 font-medium mb-2">
            Recipe Summary
          </label>
          <input
            type="text"
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.summary ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200'
            }`}
            placeholder="Brief description of your recipe"
          />
          {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="6"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.ingredients ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200'
            }`}
            placeholder="400g spaghetti&#10;200g pancetta&#10;4 large eggs"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="instructions" className="block text-gray-700 font-medium mb-2">
            Cooking Instructions (one step per line)
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="8"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.instructions ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200'
            }`}
            placeholder="Boil water in a large pot.&#10;Cook spaghetti according to package instructions."
          ></textarea>
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;