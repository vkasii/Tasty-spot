import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./RecipesCategories.module.css";

interface RecipesCategoriesProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}
const RecipesCategories: React.FC<RecipesCategoriesProps> = ({
  onCategorySelect,
  selectedCategory,
}) => {
  const [uniqueCategories, setUniqueCategories] = useState<
    (string | null | undefined)[]
  >(["All"]);

  const { recipes } = useSelector((state: RootState) => state.recipes);

  const getUniqueCategories = useCallback(() => {
    const categories = recipes.map((recipe) => recipe.strCategory);
    setUniqueCategories((prev) => [...new Set([...prev, ...categories])]);
  }, [recipes]);

  useEffect(() => {
    getUniqueCategories();
  }, [getUniqueCategories]);

  const handleCategoryClick = (category: string) => {
    onCategorySelect(category);
  };

  return (
    <ul className={styles.container}>
      {uniqueCategories.map((category) => (
        <button
          onClick={() => handleCategoryClick(category as string)}
          type="button"
          key={category}
          className={`${styles.category} ${
            category === selectedCategory ? styles.activeCategory : ""
          }`}
        >
          {category}
        </button>
      ))}
    </ul>
  );
};

export default RecipesCategories;
