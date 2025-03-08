import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "../../types/types";
import Spinner from "../spinner/Spinner";
import styles from "./RecipeDetail.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const RecipeDetail = () => {
  const { idMeal } = useParams<{ idMeal: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  useEffect(() => {
    if (idMeal) {
      const foundRecipe = recipes.find((recipe) => recipe.idMeal === idMeal);
      console.log("foundRecipe", foundRecipe);
      setRecipe(foundRecipe || null);
    }
  }, [idMeal, recipes]);

  if (!recipe) return;
  const ingredients = Object.keys(recipe || {})
    .filter(
      (key) => key.startsWith("strIngredient") && recipe[key as keyof Recipe]
    )
    .map((key) => recipe[key as keyof Recipe]);

  const measures = Object.keys(recipe || {})
    .filter(
      (key) => key.startsWith("strMeasure") && recipe[key as keyof Recipe]
    )
    .map((key) => recipe[key as keyof Recipe]);

  const ingredientsWithMeasures = ingredients.map((ingredient, index) => ({
    ingredient,
    measure: measures[index] || "",
  }));

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      {recipe ? (
        <>
          <div className={styles.detailHeader}>
            <h2 className={styles.title}>{recipe.strMeal}</h2>
            <p className={styles.category}>Category: {recipe.strCategory}</p>
            <p className={styles.area}>Country: {recipe.strArea}</p>
          </div>
          <div className={styles.recipeDetail}>
            <img
              src={recipe.strMealThumb || ""}
              alt={recipe.strMeal || ""}
              className={styles.image}
            />
            <div className={styles.content}>
              <h3 className={styles.instructionsTitle}>Instructions</h3>
              <p
                className={styles.instructions}
                dangerouslySetInnerHTML={{
                  __html:
                    recipe.strInstructions?.replace(/\r\n/g, "<br />") || "",
                }}
              />
            </div>
          </div>

          {recipe.strYoutube && (
            <a
              className={styles.videoLink}
              href={recipe.strYoutube}
              target="_blank"
            >
              Watch video instrucions
            </a>
          )}

          <div className={styles.ingredients}>
            <h3 className={styles.ingredientsTitle}>Ingredients</h3>
            <ul>
              {ingredientsWithMeasures.map((item, index) => (
                <li key={index}>
                  {item.ingredient}:{" "}
                  <span className="text-highlighted">{item.measure}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Recipe not found.</p>
      )}
    </div>
  );
};

export default RecipeDetail;
