import { useNavigate } from "react-router-dom";
import styles from "../../../entities/character/ui/allCharacterComponents.module.css";

export default function DetailsResponseNotFound() {
  const navigate = useNavigate();
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
