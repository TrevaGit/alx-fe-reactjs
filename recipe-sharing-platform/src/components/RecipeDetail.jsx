import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  // Load recipe when component mounts
  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Back link */}
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        &larr; Back to Home
      </Link>

      {/* Main card with shadow */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded mb-6"
        />

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-700">{recipe.summary}</p>
        </section>

        {/* Ingredients */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients
              ? recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
              : <li>No ingredients provided.</li>}
          </ul>
        </section>

        {/* Instructions */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {recipe.instructions
              ? recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)
              : <li>No instructions provided.</li>}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;
