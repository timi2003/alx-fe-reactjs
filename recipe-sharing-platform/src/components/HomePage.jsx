import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import data from "../data.json";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data);  // ✅ Load recipes from data.json
    }, []);

    return (
        <div className="border-indigo-400 p-8 rounded-lg shadow-lg">
            <h1 className="text-xl text-indigo-800">Recipe Collection</h1>
            <div className="shadow-lg">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="mb-4 p-4 border rounded-lg shadow">
                        <h2 className="text-lg font-semibold">{recipe.title}</h2>
                        <p className="text-gray-600">{recipe.summary}</p>
                        
                        {/* ✅ Add Link to navigate to RecipeDetail page */}
                        <Link 
                            to={`/recipe/${recipe.id}`} 
                            className="text-blue-500 hover:underline"
                        >
                            View Recipe
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
