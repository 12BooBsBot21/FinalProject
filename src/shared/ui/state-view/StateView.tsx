import { useNavigate } from 'react-router-dom'
import styles from './stateView.module.css'
import { Button } from '@mantine/core'
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
        {buttonHome && <Button onClick={() => navigate('/')}>home page</Button>}
        {buttonBack && <Button onClick={() => navigate(-1)}>backS</Button>}
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
        {buttonHome && <Button onClick={() => navigate('/')}>home page</Button>}
        {buttonBack && <Button onClick={() => navigate(-1)}>back</Button>}
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
        {buttonHome && <Button onClick={() => navigate('/')}>home page</Button>}
        {buttonBack && <Button onClick={() => navigate(-1)}>back</Button>}
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
        {buttonHome && <Button onClick={() => navigate('/')}>home page</Button>}
        {buttonBack && <Button onClick={() => navigate(-1)}>back</Button>}
      </div>
    </div>
  )
}
