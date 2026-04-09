import { useNavigate, useParams } from "react-router-dom";

import styles from "./allCharacterComponents.module.css";
import { useFetch } from "../../hooks/useFetch";
import type { Character } from "../../types";
import { useFavorite } from "../favorite/useFavorite";

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const numericId = Number(id);

  const validId =
    id !== undefined &&
    id !== "" &&
    Number.isInteger(numericId) &&
    numericId > 0;

  const endUrl = validId ? id : "";
  const navigate = useNavigate();

  const { data, isLoading, error, statusResponse } = useFetch<Character>(
    endUrl ? `/${endUrl}` : "",
  );

  const { isFavorite, toggleFavorite } = useFavorite();
  const favorite = data ? isFavorite(data.id) : false;

  if (!validId) {
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

  if (isLoading) {
    return (
      <div className={styles.stateBoxWrapper}>
        <div className={styles.stateBox}>
          <h1 className={styles.stateTitle}>Loading...</h1>
          <p className={styles.stateText}>Загружаем информацию о персонаже.</p>
        </div>
      </div>
    );
  }

  if (statusResponse === 404) {
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

  if (error) {
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

  if (!data) {
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
              onClick={() => toggleFavorite(data)}
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
