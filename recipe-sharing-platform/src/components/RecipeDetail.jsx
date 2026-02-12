import React from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) return <div className="text-center mt-10">Recipe not found.</div>;

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-6" />
      <p className="mb-4">{recipe.summary}</p>
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients ? recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>) : <li>No ingredients</li>}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions ? recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>) : <li>No instructions</li>}
      </ol>
    </div>
  );
};

export default RecipeDetail;
