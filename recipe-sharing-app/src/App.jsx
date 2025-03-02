import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useRecipeStore from './store/useRecipeStore';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  const { setRecipes, generateRecommendations } = useRecipeStore();

  // Initialize with sample data
  useEffect(() => {
    // Sample recipes
    const sampleRecipes = [
      {
        id: '1',
        title: 'Chocolate Chip Cookies',
        description: 'Classic chocolate chip cookies that are crispy on the outside and chewy on the inside.',
        ingredients: ['2 1/4 cups all-purpose flour', '1 tsp baking soda', '1 tsp salt', '1 cup butter', '3/4 cup sugar', '3/4 cup brown sugar', '2 eggs', '2 tsp vanilla extract', '2 cups chocolate chips'],
        instructions: '1. Preheat oven to 375°F (190°C).\n2. Mix flour, baking soda, and salt in a bowl.\n3. Cream butter and sugars until light and fluffy.\n4. Beat in eggs one at a time, then add vanilla.\n5. Gradually add flour mixture.\n6. Stir in chocolate chips.\n7. Drop by rounded tablespoons onto ungreased baking sheets.\n8. Bake for 9-11 minutes or until golden brown.\n9. Cool on baking sheets for 2 minutes, then transfer to wire racks.',
        prepTime: 15,
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Spaghetti Carbonara',
        description: 'A simple Italian pasta dish with eggs, cheese, bacon, and black pepper.',
        ingredients: ['1 pound spaghetti', '2 tablespoons olive oil', '6 ounces pancetta or bacon', '4 garlic cloves', '4 large eggs', '1 cup grated Parmesan cheese', 'Black pepper', 'Salt'],
        instructions: '1. Cook spaghetti according to package directions. Reserve 1/2 cup pasta water before draining.\n2. While pasta cooks, heat olive oil in a large skillet.\n3. Add pancetta or bacon and cook until crispy.\n4. Add minced garlic and cook for 1 minute.\n5. In a bowl, whisk eggs, cheese, and pepper.\n6. Drain pasta and add to the skillet with the pancetta.\n7. Remove from heat and quickly add the egg mixture, stirring constantly.\n8. Add pasta water as needed to create a creamy sauce.\n9. Season with salt and pepper to taste.',
        prepTime: 25,
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        title: 'Greek Salad',
        description: 'A refreshing Mediterranean salad with fresh vegetables and feta cheese.',
        ingredients: ['1 cucumber', '1 green bell pepper', '1 red bell pepper', '1 pint cherry tomatoes', '1/2 red onion', '1 cup Kalamata olives', '8 oz feta cheese', '2 tbsp olive oil', '1 tbsp red wine vinegar', '1 tsp dried oregano', 'Salt', 'Black pepper'],
        instructions: '1. Chop cucumber, bell peppers, tomatoes, and red onion into bite-sized pieces.\n2. Combine vegetables in a large bowl.\n3. Add olives and crumbled feta cheese.\n4. In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper.\n5. Pour dressing over salad and toss gently to combine.\n6. Serve immediately or refrigerate for up to 2 hours before serving.',
        prepTime: 15,
        createdAt: new Date().toISOString()
      }
    ];

    setRecipes(sampleRecipes);
  }, [setRecipes]);

  // Generate recommendations when app loads
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={
              <>
                <RecommendationsList />
                <FavoritesList />
                <RecipeList />
              </>
            } />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;