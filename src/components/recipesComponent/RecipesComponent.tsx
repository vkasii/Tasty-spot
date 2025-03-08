import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Spinner from "../spinner/Spinner";
import RecipeItem from "../recipeItem/RecipeItem";
import styles from "./RecipesComponent.module.css";
import { Recipe } from "../../types/types";

const RecipesComponent = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  const filteredRecipes =
    selectedCategory === "All"
      ? recipes
      : recipes.filter(
          (recipe: Recipe) => recipe.strCategory === selectedCategory
        );

  if (loading) <Spinner />;

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {filteredRecipes.length > 0 ? (
        <ul className={styles.container}>
          {filteredRecipes.map((recipe: Recipe) => (
            <RecipeItem key={recipe.idMeal} recipe={recipe} />
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default RecipesComponent;
