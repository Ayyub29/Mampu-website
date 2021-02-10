import styles from './Testimoni.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export default function ImpactNumbers() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
      <div className={styles.testimoniSection}>
        <div className={styles.testimoniTop}></div>
        <div className={styles.title}>
          <h1>Testimonials</h1>
        </div>
        <Carousel responsive={responsive} className={styles.testimoniCenter}>
          <div className={styles.testiCard}>
            <img src="/testi1.png" alt="testi-1" className={styles.testiImage} />
            <h3 className={styles.testiName}>Jane Doe</h3>
            <i className={styles.testiPost}>Donors</i>
            <hr className={styles.thinLine}></hr>
            <p className={styles.testiContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className={styles.testiCard}>
            <img src="/testi1.png" alt="testi-1" className={styles.testiImage} />
            <h3 className={styles.testiName}>Jane Doe</h3>
            <i className={styles.testiPost}>Donors</i>
            <hr className={styles.thinLine}></hr>
            <p className={styles.testiContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className={styles.testiCard}>
            <img src="/testi1.png" alt="testi-1" className={styles.testiImage} />
            <h3 className={styles.testiName}>Jane Doe</h3>
            <i className={styles.testiPost}>Donors</i>
            <hr className={styles.thinLine}></hr>
            <p className={styles.testiContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className={styles.testiCard}>
            <img src="/testi1.png" alt="testi-1" className={styles.testiImage} />
            <h3 className={styles.testiName}>Jane Doe</h3>
            <i className={styles.testiPost}>Donors</i>
            <hr className={styles.thinLine}></hr>
            <p className={styles.testiContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </Carousel>
       
        <div className={styles.testimoniBottom}></div>
      </div>
      
  )
}