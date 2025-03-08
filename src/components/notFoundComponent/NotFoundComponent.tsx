import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundComponent.module.css";

const NotFoundComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} text-error`}>Oops! Page Not Found</h1>
      <p className={styles.description}>
        Sorry, but we can't seem to find the page you're looking for. It might
        be due to a wrong URL or the page no longer exists.
      </p>
      <p className={styles.suggestion}>
        Don't worry, you can go back to the homepage and continue browsing!
      </p>
      <Link to="/" className="button buttonPrimary">
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundComponent;
