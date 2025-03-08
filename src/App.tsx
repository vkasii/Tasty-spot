import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import Spinner from "./components/spinner/Spinner";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import { getAllRecipes } from "./redux/recipesSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
const Home = lazy(() => import("./pages/Home"));
const Recipes = lazy(() => import("./pages/Recipes"));
const Detail = lazy(() => import("./pages/Detail"));
const Cart = lazy(() => import("./pages/Cart"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {

  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className="container">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:idMeal" element={<Detail />} />
            <Route path="/recipes/cart" element={<Cart />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
