import styles from './Testimoni.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimoniCard from "./TestimoniCard";



export default function ImpactNumbers() {
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
          <TestimoniCard 
            testiImg="/adhanjo.png"
            testiName={"Adhani R. Sutarjo"} 
            testiPost={"Volunteer"} 
            testiContent={"Being a part of MAMPU is such a wonderful experience; I am able to work professionally with a friendly and fun environment. It also feels amazing to give positive impacts for the society by helping the vulnerable families affected by the pandemic"}>
          </TestimoniCard>
          <TestimoniCard 
            testiImg="/elaine.jpg"
            testiName={"Elaine Indra"} 
            testiPost={"Volunteer"} 
            testiContent={"Being a part of MAMPU exposed me to the realities of the underprivileged people. I got to work with an amazing team who are all very amazing in alleviating poverty in Indonesia and I got to meet a lot of new friends."}>
          </TestimoniCard>
          <TestimoniCard 
            testiImg="/Andy.jpg"
            testiName={"Andy"} 
            testiPost={"Recipient"} 
            testiContent={"“I am very thankful for all the donors and MAMPU team for helping me. MAMPU has been a huge blessing and taught me how to stand on my own two feet. The mentors are very friendly, supportive, and insightful. Thank you.”"}>
          </TestimoniCard>
         
          <br></br>
          
        </Carousel>
       
        <div className={styles.testimoniBottom}></div>
      </div>
      
  )
}