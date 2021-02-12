import styles from './Header.module.css'

export default function Header() {
  return (
      <div className={styles.head}>
          <div className={styles.desc}>
            <h1>MAMPU</h1>
            <p>Alleviating Poverty One Family at A time</p>
          </div>
      </div>
  )
}