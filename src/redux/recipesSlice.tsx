import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Recipe } from "../types/types";

type State = {
  recipes: Recipe[];
  loading: boolean;
  error: string | undefined;
};

const initialState: State = {
  recipes: [],
  loading: false,
  error: "",
};

type Category = {
  strCategory: string;
};

const getAllCategories = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await response.json();
  const categories = data.categories.map(
    (category: Category) => category.strCategory
  );
  return categories;
};

const getRecipesByCategory = async (category: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`
  );
  const data = await response.json();
  return data.meals || [];
};

export const getAllRecipes = createAsyncThunk(
  "recipes/getAllRecipes",
  async () => {
    const categories = await getAllCategories();
    console.log('categories', categories);
    
    const recipes = [];

    for (const category of categories) {
      const categoryRecipes = await getRecipesByCategory(category);
      recipes.push(...categoryRecipes);
    }

    return recipes;
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.loading = false;
      })
      .addCase(getAllRecipes.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default recipesSlice.reducer;
