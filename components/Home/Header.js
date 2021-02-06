import styles from './Header.module.css'

export default function Header() {
  return (
      <div className={styles.head}>
          <div className={styles.desc}>
            <h1>MAMPU</h1>
            <p>MAMPU at its core is a pLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
      </div>
  )
}