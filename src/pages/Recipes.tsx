import { useSelector } from "react-redux";
import Spinner from "../components/spinner/Spinner";
import { RootState } from "../types/types";
import RecipesComponent from "../components/recipesComponent/RecipesComponent";
import RecipesCategories from "../components/recipesCategories/RecipesCategories";
import { useState } from "react";

const Recipes = () => {
  const { loading, error } = useSelector((state: RootState) => state.recipes);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  if (loading) <Spinner />;

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <RecipesCategories
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <RecipesComponent selectedCategory={selectedCategory} />
    </>
  );
};

export default Recipes;
