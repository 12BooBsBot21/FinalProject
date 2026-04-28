import { useNavigate } from "react-router-dom";
import styles from "../../../entities/character/ui/allCharacterComponents.module.css";

export default function DetailsBadId() {
  const navigate = useNavigate();
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={styles.stateBox}>
        <h1 className={styles.stateTitle}>Not valid ID</h1>
        <p className={styles.stateText}>
          Передан некорректный идентификатор персонажа.
        </p>
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
