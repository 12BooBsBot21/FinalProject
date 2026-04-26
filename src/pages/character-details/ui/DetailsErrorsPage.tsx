import type { NavigateFunction } from "react-router-dom";
import styles from "../../../entities/character/ui/allCharacterComponents.module.css";

interface DetailsErrorsPageProps {
  navigate: NavigateFunction;
  error: string;
}
export default function DetailsErrorsPage({
  navigate,
  error,
}: DetailsErrorsPageProps) {
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={`${styles.stateBox} ${styles.stateBoxError}`}>
        <h1 className={`${styles.stateTitle} ${styles.stateTitleError}`}>
          Error
        </h1>
        <p className={styles.stateText}>{error}</p>
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
