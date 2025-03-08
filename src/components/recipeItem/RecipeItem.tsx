import { Recipe } from "../../types/types";
import styles from "./RecipeItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addRecipe, removeRecipe } from "../../redux/cartSlice";

type RecipeProps = {
  recipe: Recipe;
};

const RecipeItem: React.FC<RecipeProps> = ({ recipe }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartRecipes = useSelector((state: RootState) => state.cartRecipes.cartRecipe);

  const inCart = cartRecipes.some((item) => item.idMeal === recipe.idMeal)

  function addRecipeToCart() {
    dispatch(addRecipe(recipe));
  }

  function removeRecipeFromCart() {
    dispatch(removeRecipe(recipe.idMeal));
  }

  return (
    <li className={styles.card}>
      <img
        src={recipe.strMealThumb || ""}
        className={styles.image}
        alt={recipe.strMeal || ""}
      />
      <div className={styles.content}>
        <p className={styles.category}>{recipe.strCategory}</p>
        <h3 className={styles.title}>{recipe.strMeal}</h3>
        <p className={styles.area}>{recipe.strArea}</p>
        <div className={styles.actionsContainer}>
          <Link to={`/recipes/${recipe.idMeal}`} className={styles.link}>
            Detail
          </Link>
          {inCart ? (
            <button
              onClick={removeRecipeFromCart}
              type="button"
              className={styles.button}
            >
              Remove from favourite
            </button>
          ) : (
            <button
              onClick={addRecipeToCart}
              type="button"
              className={styles.button}
            >
              Add to favourite
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default RecipeItem;
