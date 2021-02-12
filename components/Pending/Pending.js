import styles from './Pending.module.css'

export default function Header() {
  return (
      <div className={styles.comingSoon}>
          <h1>Coming <br/> Soon</h1>
          <p>We are currently working on this page. Thank you for your patience.</p>
      </div>
  )
}