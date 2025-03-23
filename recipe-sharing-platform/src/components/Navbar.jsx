import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-white font-bold text-xl">Recipe Share</Link>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:text-indigo-200 transition">Home</Link>
            <Link to="/add-recipe" className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition">Add Recipe</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;