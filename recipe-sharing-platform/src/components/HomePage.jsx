import { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data);  // ✅ No need to fetch data.json
    }, []); // ✅ Added dependency array

    return (
        <div className="border-indigo-400 p-8 rounded-lg shadow-lg">
            <h1 className="text-xl text-indigo-800">Recipe Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map(recipe => (
                    <div 
                        key={recipe.id} 
                        className="p-4 border rounded-lg hover:bg-indigo-100 transition duration-300"
                    >
                        <h2 className="text-lg font-semibold">{recipe.title}</h2>
                        <p className="text-gray-700">{recipe.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;