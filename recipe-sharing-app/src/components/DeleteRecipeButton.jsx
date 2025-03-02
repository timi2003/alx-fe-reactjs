import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import { FaTrash } from 'react-icons/fa';

const DeleteRecipeButton = ({ recipeId, onDelete, className = '', redirectOnDelete = false }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      
      if (onDelete && typeof onDelete === 'function') {
        onDelete(recipeId);
      }
      
      if (redirectOnDelete) {
        navigate('/');
      }
    }
  };

  return (
    <button 
      onClick={handleDelete}
      className={`flex items-center text-gray-500 hover:text-gray-700 ${className}`}
      aria-label="Delete recipe"
    >
      <FaTrash className="mr-1" /> Delete
    </button>
  );
};

export default DeleteRecipeButton;