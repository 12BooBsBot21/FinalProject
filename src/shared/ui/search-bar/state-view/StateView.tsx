import { useNavigate } from "react-router-dom";
import styles from "./stateView.module.css";
interface ShowProps {
  children: string;
}
export function ShowLoading({ children }: ShowProps) {
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={styles.stateBox}>
        <h1 className={styles.stateTitle}>Loading...</h1>
        <p className={styles.stateText}>{children}</p>
      </div>
    </div>
  );
}
export function ShowError({ children }: ShowProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={`${styles.stateBox} ${styles.stateBoxError}`}>
        <h1 className={`${styles.stateTitle} ${styles.stateTitleError}`}>
          Error
        </h1>
        <p className={styles.stateText}>{children}</p>
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
export function ShowNotFound({ children }: ShowProps) {
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={styles.stateBox}>
        <h1 className={styles.stateTitle}>Nothing found</h1>
        <p className={styles.stateText}>{children}</p>
      </div>
    </div>
  );
}
