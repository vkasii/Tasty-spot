import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";

const HeaderNav: React.FC = () => {
  return (
    <header className={`${styles.headerContainer} container`}>
      <NavLink className={styles.link} to={"/"}>
        Home
      </NavLink>
      <NavLink className={styles.link} to={"/recipes"}>
        Recipes
      </NavLink>
      <NavLink className={styles.link} to={"/recipes/cart"}>
        Cart
      </NavLink>
    </header>
  );
};

export default HeaderNav;
