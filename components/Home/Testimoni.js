import styles from './Testimoni.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimoniCard from "./TestimoniCard";



export default function Testimoni({testimoni}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
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
          {testimoni.map((a) => (
            <TestimoniCard 
              testiImg={`https:${a.fotoAdvisor.fields.file.url}`}
              testiName={a.namaAdvisor}
              testiPost={a.jabatanAdvisor}
              testiContent={a.deskripsiAdvisor}>
            </TestimoniCard>
          ))}
          
          <br></br>
          
        </Carousel>
       
        <div className={styles.testimoniBottom}></div>
      </div>
      
  )
}