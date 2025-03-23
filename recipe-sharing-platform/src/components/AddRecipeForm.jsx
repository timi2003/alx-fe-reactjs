import { useState, useEffect } from "react";
import data from "../data.json";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data);  // ✅ No need to fetch data.json
    }, []); // ✅ Added dependency array

    return (
        <div className="border-indigo-400 p-8 rounded-lg shadow-lg">
            <h1 className="text-xl text-indigo-800">Recipe Collection</h1>
            <div className="shadow-lg">
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>{recipe.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;

