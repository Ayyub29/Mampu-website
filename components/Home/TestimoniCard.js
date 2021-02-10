import styles from './TestimoniCard.module.css'


const TestimoniCard = ({ testiName, testiPost, testiContent  }) => {
    return(
        <div className={styles.testiCard}>
            <img src="/testi1.png" alt="testi-1" className={styles.testiImage} />
            <h3 className={styles.testiName}>{testiName}</h3>
            <i className={styles.testiPost}>{testiPost}</i>
            <hr className={styles.thinLine}></hr>
            <p className={styles.testiContent}>{testiContent}</p>
        </div>
    );
};

export default TestimoniCard;