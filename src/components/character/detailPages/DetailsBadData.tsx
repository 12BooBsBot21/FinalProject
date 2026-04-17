import type { NavigateFunction } from "react-router-dom";
import styles from "../allCharacterComponents.module.css";
interface DetailsBadDataProps {
  navigate: NavigateFunction;
}
export default function DetailsBadData({ navigate }: DetailsBadDataProps) {
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={styles.stateBox}>
        <h1 className={styles.stateTitle}>Page not found</h1>
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
