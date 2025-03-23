import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json"; // ✅ Import data directly

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));  
        setRecipe(foundRecipe);
    }, [id]);  // ✅ Added dependency array

    if (!recipe) return <p className="text-center text-gray-700 mt-10">Recipe not found.</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md"/>
            <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
            <p className="text-gray-700 mt-2">{recipe.summary}</p>
        </div>
    );
}

export default RecipeDetail;

