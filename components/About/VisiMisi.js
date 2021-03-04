import styles from './VisiMisi.module.css'
import Values from './Values'
import Newsletter from '@components/Home/Newsletter'


export default function VisiMisi() {
  return (
      <div className={styles.about}>
        <div className={styles.headerVisiMisi}>
            <div className={styles.visi}>
              <h1>Vision</h1>
              <p>To be the most trustworthy and effective poverty alleviation organization in the world</p>
            </div>
            <div className={styles.misi}>
              <h1>Mission</h1>
              <p>To up low-income workers’ capacities through impactful donations and mentorship, so they can go on to become entrepreneurs and workers who can stand on their own two feet</p>
            </div>
        </div>
        <div className={styles.quotesTengah}>
          <Newsletter/>
          {/* <img src="/open-quote.svg" alt="open-quote" className={styles.openQuote} />
          <p>Overcoming poverty is not a charity, it is an act of justice<br/> <span>- Nelson Mandela</span></p>
          <img src="/close-quote.svg" alt="close-quote" className={styles.closeQuote} /> */}
        </div>
        <Values />
        <div className={styles.ombakKanan}>
          <img src="/ombak-pojok-kanan.svg" alt="vector" className={styles.ombakImg}/>
        </div>
      </div>
  )
}