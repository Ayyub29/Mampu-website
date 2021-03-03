import styles from './ImpactNumbers.module.css'

export default function ImpactNumbers() {
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
            window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // const obj = document.getElementById("helped");
    // animateValue(obj, 0, 80, 5000);
  return (
      <div>
        <div className={styles.title}>
            <h1>Impact in Numbers</h1>
        </div>
        <div className={styles.numbersList}>
            <ul>
                <li>
                    <img src="/numbers-icon-1.svg" alt="numbers-icon-1" className={styles.numbersIcon} />
                    <h2>Rp 250M+</h2>
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
                    <h2>5+</h2>
                    <p>Cities</p>
                </li>
                {/* <div className={styles.verticalLine}></div> */}
                <li>
                    <img src="/numbers-icon-4.svg" alt="numbers-icon-4" className={styles.numbersIcon} />
                    <h2 id="helped">80+</h2>
                    <p>Individuals <br/> helped</p>
                </li>
            </ul>
        </div>
        
         
      </div>
  )
}