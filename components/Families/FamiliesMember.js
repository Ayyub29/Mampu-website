import styles from './FamiliesMember.module.css'
import React, { useState } from 'react';
import { CardColumns, Card} from 'react-bootstrap';

export default function FamiliesMember() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const currFam =[
        {"title":"Bu Devi and Family","desc":"Ibu Nurdjanah is a 42 years old freelance hairstylist and a single mother of 2 children, Yasmine (12 years old) and Boy (5 years old). After losing orders due to the COVID-19 pandemic, Ibu Janah and her children were threatened of being evicted from their rented house in Jakarta and struggled to fulfil her children's necessities. MAMPU Initiative has then strived to support her family by providing financial aid to fulfil their basic necessities as well as to assist Bu Janah in finding jobs. Currently, Bu Janah is working in one of the beauty salons in Jakarta and she is able to be financially independent."},
        {"title":"Pak Darmawan","desc":"As a tailor, Pak Darmawan has been significantly affected by the pandemic. He did not receive any orders which made him in a hard position to attain his family basic needs, specifically for his two young children. MAMPU Initiative has then helped his family by providing financial aid and giving tailor orders to fabricate cloth masks that will be distributed to numbers of families. In the meantime, Pak Darmawakan is continuing his business and is completely independent."},
        {"title":"Pak Yanto and Family","desc":"Andy is the backbone of his family with two younger siblings and a single mother. The COVID-19 pandemic has stopped his income as a freelancer and has affected his business adversely. With the help of MAMPU Initiative, Andy has successfully restarted his business and is cooperating with Pak Aris as a tailor who is also affected by the epidemic."},
        {"title":"Pak Andre","desc":"The COVID-19 epidemic has made Pak Andre lose order for his fruit salad business. He struggled to pay his electricity bills and to purchase diapers and milk as the main necessity for his two young children. At the present moment, Pak Andre is able to pay his electricity bills while finding ways to develop his business in order to be financially independent. "},
        {"title":"Pak Kusmintoro and family","desc":"Pak Kusmintoro is a 40 years old car polisher who lived in Tangerang. Pak Kus’ income as being a car polisher is the main source of living for his wife and two children; Ibu Yuli (29 years old), Tara (8 years old) and Raina (3 years old). During the COVID-19 pandemic, Pak Kus was sent home as there were very few customers in his work. He has no income at all to support his family, especially his young children. As of now, Pak Kus has returned to work as a car polisher and is able to live independently due to the help that MAMPU Initiative has offered. "},
        {"title":"Nathalie","desc":"Before receiving help from MAMPU Initiative, Nathalie was not able to pay her tuition arrears which made her junior high school certificate confiscated hence unable to enrol in high school. Nathalie and her grandma also had the difficulty to fulfil their household necessities to the unfortunate economic circumstances. MAMPU Initiative has then helped Nathalie to pay her tuition fees and now she is studying in high school. Nathalie and her grandma are also now able to purchase their daily necessities while her grandma is developing a food business to increase their income."}
    ];


    function toggle1(){
        setShow1(!show1);
    }
    function toggle2(){
        setShow2(!show2);
    }

    return(
        <div>
            <div className={styles.head}>
                <div className={styles.desc}>
                    <h1>MAMPU Families</h1>
                </div>
            </div>
            <div className={styles.famList} >
                <ul>
                    <li style={{
                        backgroundImage: show1? "url(/curr-fam-bg.png)":"none", 
                        backgroundPositionY: "bottom",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <button onClick={toggle1} className={styles.famItem} style={{color: show1? "#A6C8E8":"#383769"}} > <img src="/show-toggler.png" style={{transform: show1? "rotate(90deg)":"none", color: show1? "#A6C8E8":"#383769"}} className={styles.famToggler}/> Current Families</button>
                        <div style={{display: show1? "flex":"none"}} className={styles.famSection}>
                            <CardColumns >
                                {currFam.map((a) =>(
                                    <Card className={styles.cardFamContainer}>
                                        <Card.Img variant="top" src="/dummy-pict.png" className={styles.imgFam}/>
                                        <Card.Body className={styles.descFam}>
                                            <Card.Title className={styles.titleFam}>{a.title}</Card.Title>
                                            <Card.Text className={styles.textFam}>
                                                {a.desc}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))}

                            </CardColumns>
                        </div>
                    </li>
                    <li style={{marginTop: show1? "50px":"20px"}}>
                        <button onClick={toggle2} className={styles.famItem}> <img src="/show-toggler.png" style={{transform: show2? "rotate(90deg)":"none"}} className={styles.famToggler}/> Past Families</button>
                        <div style={{display: show2? "flex":"none"}} className={styles.famSection}>
                            <CardColumns >
                                {currFam.map((a) =>(
                                    <Card className={styles.cardFamContainer}>
                                        <Card.Img variant="top" src="/dummy-pict.png" className={styles.imgFam}/>
                                        <Card.Body className={styles.descFam}>
                                            <Card.Title className={styles.titleFam}>{a.title}</Card.Title>
                                            <Card.Text className={styles.textFam}>
                                                {a.desc}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))}

                            </CardColumns>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.ombakKanan} style={{marginTop: show2? "50px":"300px"}}>
                <img src="/footer-fam.png" alt="vector" className={styles.ombakImg}/>
            </div>
        </div>
    )
}