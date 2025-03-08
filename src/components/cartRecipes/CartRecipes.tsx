import { useEffect, useState } from "react";
import { Recipe } from "../../types/types";
import RecipeItem from "../recipeItem/RecipeItem";
import styles from "./CartRecipes.module.css";

const CartRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    setRecipes(JSON.parse(localStorage.getItem("cartRecipes") || "[]"));
  }, [recipes]);

  return (
    <>
      {recipes.length > 0 ? (
        <ul className={styles.container}>
          {recipes.map((recipe: Recipe) => (
            <RecipeItem key={recipe.idMeal} recipe={recipe} />
          ))}
        </ul>
      ) : (
        <h3 className={styles.empty}>Your cart is empty</h3>
      )}
    </>
  );
};

export default CartRecipes;
