import create from 'zustand'

const useRecipeStore = create(set => ({
 //recipe collection
 recipes: [],
 filteredRecipes: [],
 searchTerm: '',
 favourites: [],
 recommendations: [],

 addRecipe: (newRecipe) => set((state) => ({
   recipes: [...state.recipes, newRecipe],
   filteredRecipes: [...state.filteredRecipes, newRecipe]
})),

//set initial recipe collection
setRecipes: (recipes) => set({
  recipes,
  filteredRecipes: recipes
}),

// Delete a recipe
deleteRecipe: (recipeId) => set((state) => ({
  recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
  filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== recipeId),
  // Also remove from favorites if present
  favorites: state.favorites.filter(id => id !== recipeId)
})),

// Update an existing recipe
updateRecipe: (updatedRecipe) => set((state) => ({
  recipes: state.recipes.map(recipe => 
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  ),
  filteredRecipes: state.filteredRecipes.map(recipe => 
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  )
})),

// Search functionality
setSearchTerm: (term) => set((state) => {
  const newState = { searchTerm: term };
  
  // If search term is empty, show all recipes
  if (!term.trim()) {
    newState.filteredRecipes = state.recipes;
  } else {
    // Filter recipes by title or ingredients
    newState.filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase()) ||
      (recipe.ingredients && recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(term.toLowerCase())))
    );
  }
  
  return newState;
}),

// Favorites functionality
addFavorite: (recipeId) => set((state) => ({ 
  favorites: [...state.favorites, recipeId] 
})),

removeFavorite: (recipeId) => set((state) => ({
  favorites: state.favorites.filter(id => id !== recipeId)
})),

// Generate recommendations based on favorites
generateRecommendations: () => set((state) => {
  // Find what categories the user likes based on favorites
  const favoriteRecipes = state.recipes.filter(recipe => 
    state.favorites.includes(recipe.id)
  );
  
  // Extract categories or ingredients from favorites to find similar recipes
  const favoriteIngredients = favoriteRecipes.flatMap(recipe => 
    recipe.ingredients || []
  );
  
  // Find recipes that have similar ingredients but aren't already favorites
  const recommendations = state.recipes.filter(recipe => 
    !state.favorites.includes(recipe.id) && 
    recipe.ingredients && 
    recipe.ingredients.some(ingredient => 
      favoriteIngredients.includes(ingredient)
    )
  );
  
  return { recommendations };
}),
}));

export default useRecipeStore;
