import type { NavigateFunction } from "react-router-dom";
import styles from "../allCharacterComponents.module.css";

interface DetailsResponseNotFoundProps {
  navigate: NavigateFunction;
}
export default function DetailsResponseNotFound({
  navigate,
}: DetailsResponseNotFoundProps) {
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={styles.stateBox}>
        <h1 className={styles.stateTitle}>Character not found</h1>
        <p className={styles.stateText}>Персонаж с таким id не найден.</p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          Back to list
        </button>
      </div>
    </div>
  );
}
