import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Recipe Sharing App</h1>

        <Routes>
          {/* Main page: Add recipe, search, list, favorites, recommendations */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />

          {/* Recipe details page */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
