import { useState } from "react";
import data from "../data.json";

const AddRecipeForm = ({ onAddRecipe }) => {
    const [recipe, setRecipe] = useState({
        title: "",
        summary: "",
        image: "",
        ingredients: "",
        steps: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Convert ingredients and steps into arrays
        const newRecipe = {
            ...recipe,
            id: data.length + 1, // Assign a unique ID
            ingredients: recipe.ingredients.split(",").map(item => item.trim()), 
            steps: recipe.steps.split(".").map(item => item.trim()) 
        };

        onAddRecipe(newRecipe); // Pass the new recipe to the parent component
        setRecipe({ title: "", summary: "", image: "", ingredients: "", steps: "" }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} className="border-indigo-400 p-8 rounded-lg shadow-lg">
            <h2 className="text-xl text-indigo-800">Add a New Recipe</h2>

            <label className="block mt-2">Title:</label>
            <input 
                type="text" 
                name="title" 
                value={recipe.title} 
                onChange={handleChange} 
                required 
                className="border rounded p-2 w-full"
            />

            <label className="block mt-2">Summary:</label>
            <textarea 
                name="summary" 
                value={recipe.summary} 
                onChange={handleChange} 
                required 
                className="border rounded p-2 w-full"
            ></textarea>

            <label className="block mt-2">Image URL:</label>
            <input 
                type="text" 
                name="image" 
                value={recipe.image} 
                onChange={handleChange} 
                required 
                className="border rounded p-2 w-full"
            />

            <label className="block mt-2">Ingredients (comma-separated):</label>
            <input 
                type="text" 
                name="ingredients" 
                value={recipe.ingredients} 
                onChange={handleChange} 
                required 
                className="border rounded p-2 w-full"
            />

            <label className="block mt-2">Steps (separate with periods):</label>
            <textarea 
                name="steps" 
                value={recipe.steps} 
                onChange={handleChange} 
                required 
                className="border rounded p-2 w-full"
            ></textarea>

            <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
                Add Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;


