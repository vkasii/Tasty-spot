import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeBanner.module.css";

const HomeBanner: React.FC = () => {
  return (
    <section className={`${styles.banner} container`}>
      <h1 className={styles.bannerTitle}>Welcome to the Recipe World!</h1>
      <p className={styles.bannerText}>
        Discover new and exciting recipes, or revisit your saved favorites.
      </p>
      <div className={styles.buttonContainer}>
        <Link to="/recipes" className="button buttonPrimary">
          View Recipe List
        </Link>
        <Link to="/recipes/cart" className="button buttonSecondary">
          Go to Saved Recipes
        </Link>
      </div>
    </section>
  );
};

export default HomeBanner;
