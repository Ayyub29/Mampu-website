import styles from './Values.module.css'

export default function Values() {
  return (
    <>
        <div className={styles.title}>
            <h1>Our Values</h1>
        </div>
        <div className={styles.valuess}>
            <div className={styles.oneValue}>
                <img src="/value1.svg" alt="value-1" className={styles.valueIcon} />
                <h2>Sustainability</h2>
                <p>To us, making real impact is an imperative. We are not satisfied with just providing aid on a one-time basis, but want to help in such a way that families can sustain themselves in the long run. We know that COVID-19’s impacts will last for some time, and we want to help families get ready to brave the storm on their own. This is why our program focuses not just on meeting families’ needs now, but also providing workers with the tools they need to survive and thrive independently in the long run.</p>
            </div>
            <div className={styles.oneValue}>
                <img src="/value2.svg" alt="value-2" className={styles.valueIcon} />
                <h2>Transparency</h2>
                <p>Here at MAMPU, we uphold the need to be accountable to donors first and foremost. We leave no room for misuse of funds. Additionally, we leave no room for doubt by posting income statements, account statements, financial projections, and donation receipts on bit.ly/foldermampu.</p>
                <br/>
                <span>How do we ensure help is being used correctly by the workers?</span>
                <br/>
                <p>We require receipts and simple financial reports from each family to hold them accountable. Families who refuse to do this no longer receive aid. These receipts are also accessible to the public from bit.ly/foldermampu.</p>

            </div>
            <div className={styles.oneValue}>
                <img src="/value3.svg" alt="value-3" className={styles.valueIcon} />
                <h2>Compassion</h2>
                <p>At MAMPU’s core, always, is heart. We are passionate about helping families because we believe in them, and care about them. That makes us work better, stronger, and with better results than many charities out there.</p>
            </div>
        </div>
    </>
  )
}