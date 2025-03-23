import { useState } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSummaryChange = (e) => {
        setSummary(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to add the new recipe
        console.log("New Recipe:", { title, summary });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Summary</label>
                <textarea
                    value={summary}
                    onChange={handleSummaryChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </div>
            <button type="submit" className="bg-indigo-500 text-white p-2 rounded">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;