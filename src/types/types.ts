export type Recipe = Record<string, string | null | undefined>;

export type RootState = {
  recipes: {
    recipes: Recipe[];
    loading: boolean;
    error: string | undefined;
  };
};