import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json"; 

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));  
        setRecipe(foundRecipe);
    }, [id]);

    if (!recipe) return <p className="text-center text-gray-700 mt-10">Recipe not found.</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md"/>
            <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
            <p className="text-gray-700 mt-2">{recipe.summary}</p>

            {/* Display Ingredients */}
            <h2 className="text-2xl font-semibold mt-4">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
                {recipe.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            {/* Display Instructions */}
            <h2 className="text-2xl font-semibold mt-4">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
                {recipe.instructions?.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
}

export default RecipeDetail;
