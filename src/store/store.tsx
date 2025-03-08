import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../redux/recipesSlice";
import cartReducer from "../redux/cartSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    cartRecipes: cartReducer
  }
})