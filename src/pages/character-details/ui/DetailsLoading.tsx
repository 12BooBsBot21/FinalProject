import styles from "../../../entities/character/ui/allCharacterComponents.module.css";
export default function DetailsLoading() {
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={styles.stateBox}>
        <h1 className={styles.stateTitle}>Loading...</h1>
        <p className={styles.stateText}>dslkfjlsjdfjs</p>
      </div>
    </div>
  );
}
