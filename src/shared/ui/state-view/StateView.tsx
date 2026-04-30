import { useNavigate } from 'react-router-dom'
import styles from './stateView.module.css'
interface ShowProps {
  children: string
  buttonHome?: boolean
  buttonBack?: boolean
}
export function ShowLoading({ children }: ShowProps) {
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={styles.stateBox}>
        <h1 className={styles.stateTitle}>Loading...</h1>
        <p className={styles.stateText}>{children}</p>
      </div>
    </div>
  )
}
export function ShowError({
  children,
  buttonHome = false,
  buttonBack = false,
}: ShowProps) {
  const navigate = useNavigate()
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={`${styles.stateBox} ${styles.stateBoxError}`}>
        <h1 className={`${styles.stateTitle} ${styles.stateTitleError}`}>
          Error
        </h1>
        <p className={styles.stateText}>{children}</p>
        {buttonHome && (
          <button
            type="button"
            onClick={() => navigate('/')}
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            home page
          </button>
        )}
        {buttonBack && (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            backS
          </button>
        )}
      </div>
    </div>
  )
}
export function ShowNotFound({
  children,
  buttonHome = false,
  buttonBack = false,
}: ShowProps) {
  const navigate = useNavigate()
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={styles.stateBox}>
        <h1 className={styles.stateTitle}>Nothing found</h1>
        <p className={styles.stateText}>{children}</p>
        {buttonHome && (
          <button
            type="button"
            onClick={() => navigate('/')}
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            home page
          </button>
        )}
        {buttonBack && (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            back
          </button>
        )}
      </div>
    </div>
  )
}
export function ShowNoData({
  children,
  buttonHome = false,
  buttonBack = false,
}: ShowProps) {
  const navigate = useNavigate()
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={styles.stateBox}>
        <h1 className={styles.stateTitle}>{children}</h1>
        {buttonHome && (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            home page
          </button>
        )}
        {buttonBack && (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            back
          </button>
        )}
      </div>
    </div>
  )
}
export function NotCorrectIndicate({
  children,
  buttonHome = false,
  buttonBack = false,
}: ShowProps) {
  const navigate = useNavigate()
  return (
    <div className={styles.stateBoxWrapper}>
      <div className={styles.stateBox}>
        <h1 className={styles.stateTitle}>Not valid ID</h1>
        <p className={styles.stateText}>{children}</p>
        {buttonHome && (
          <button
            type="button"
            onClick={() => navigate('/')}
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            home page
          </button>
        )}
        {buttonBack && (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            back
          </button>
        )}
      </div>
    </div>
  )
}
