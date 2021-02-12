import styles from './ImpactNumbers.module.css'

export default function ImpactNumbers() {
  return (
      <div>
        <div className={styles.title}>
            <h1>Impact in Numbers</h1>
        </div>
        <div className={styles.numbersList}>
            <ul>
                <li>
                    <img src="/numbers-icon-1.svg" alt="numbers-icon-1" className={styles.numbersIcon} />
                    <h2>Rp 100M+</h2>
                    <p>Capital <br/> disbursed</p>
                </li>
                {/* <div className={styles.verticalLine}></div> */}
                <li>
                    <img src="/numbers-icon-2.svg" alt="numbers-icon-2" className={styles.numbersIcon} />
                    <h2>400+</h2>
                    <p>Individuals <br/> donated</p>
                </li>
                {/* <div className={styles.verticalLine}></div> */}
                <li>
                    <img src="/numbers-icon-3.svg" alt="numbers-icon-3" className={styles.numbersIcon} />
                    <h2>4+</h2>
                    <p>Cities</p>
                </li>
                {/* <div className={styles.verticalLine}></div> */}
                <li>
                    <img src="/numbers-icon-4.svg" alt="numbers-icon-4" className={styles.numbersIcon} />
                    <h2>70+</h2>
                    <p>Individuals <br/> helped</p>
                </li>
            </ul>
        </div>
        
         
      </div>
  )
}