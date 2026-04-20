import type { NavigateFunction } from "react-router-dom";
import type { Character } from "../../../types";
import styles from "../allCharacterComponents.module.css";
interface DetailsMainPageProps {
  data: Character;
  navigate: NavigateFunction;
  toggleFavorite: (character: number) => void;
  favorite: boolean;
}
export default function DetailsMainPage({
  data,
  navigate,
  toggleFavorite,
  favorite,
}: DetailsMainPageProps) {
  return (
    <section className={styles.pageSection}>
      <div className={styles.detailsGrid}>
        <div className={styles.detailsImageCard}>
          <div className={styles.detailsImageWrapper}>
            <img
              src={data.image}
              alt={data.name}
              className={styles.detailsImage}
            />
          </div>
        </div>

        <article className={styles.detailsInfoCard}>
          <h1 className={styles.detailsTitle}>{data.name}</h1>

          <div className={styles.detailsInfoList}>
            <div className={styles.detailsInfoItem}>
              <p className={styles.detailsInfoLabel}>Status</p>
              <p className={styles.detailsInfoValue}>{data.status}</p>
            </div>

            <div className={styles.detailsInfoItem}>
              <p className={styles.detailsInfoLabel}>Gender</p>
              <p className={styles.detailsInfoValue}>{data.gender}</p>
            </div>

            <div className={styles.detailsInfoItem}>
              <p className={styles.detailsInfoLabel}>Species</p>
              <p className={styles.detailsInfoValue}>{data.species}</p>
            </div>
          </div>

          <div className={styles.detailsActions}>
            <button
              type="button"
              onClick={() => navigate("/")}
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              Back to list
            </button>

            <button
              type="button"
              onClick={() => toggleFavorite(data.id)}
              className={`${styles.button} ${
                favorite ? styles.buttonPrimary : styles.buttonSecondary
              }`}
            >
              {favorite ? "♥ В избранном" : "♡ В избранное"}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
