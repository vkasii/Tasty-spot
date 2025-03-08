import { createSlice } from "@reduxjs/toolkit";
import { Recipe } from "../types/types";

interface CartState {
  cartRecipe: Recipe[];
}

const initialState: CartState = {
  cartRecipe: JSON.parse(localStorage.getItem("cartRecipes") || "[]"),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addRecipe(state, action) {
      state.cartRecipe = [...state.cartRecipe, action.payload];
      localStorage.setItem('cartRecipes', JSON.stringify(state.cartRecipe))
    },
    removeRecipe(state, action) {
      state.cartRecipe = state.cartRecipe.filter(
        (recipe) => recipe.idMeal !== action.payload
      );
      localStorage.setItem('cartRecipes', JSON.stringify(state.cartRecipe));
    },
  },
});

export const { addRecipe, removeRecipe } = cartSlice.actions;
export default cartSlice.reducer;
