import styles from './TestimoniCard.module.css'


const TestimoniCard = ({ testiImg, testiName, testiPost, testiContent  }) => {
    return(
        <div className={styles.testiCard}>
            <img src={testiImg} alt="testi-img" className={styles.testiImage} />
            <h3 className={styles.testiName}>{testiName}</h3>
            <i className={styles.testiPost}>{testiPost}</i>
            <hr className={styles.thinLine}></hr>
            <p className={styles.testiContent}>{testiContent}</p>
        </div>
    );
};

export default TestimoniCard;