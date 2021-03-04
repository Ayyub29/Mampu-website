import styles from './FamiliesMember.module.css'
import React, { useState } from 'react';
import { CardColumns, Card} from 'react-bootstrap';

export default function FamiliesMember({currentFamily, pastFamily}) {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    function toggle1(){
        setShow1(!show1);
    }
    function toggle2(){
        setShow2(!show2);
    }

    return(
        <div>
            <div className={styles.head}>
                <div className={styles.desc} style={{
                    backgroundImage: show1? "url(/header-fam-bg.png)":"none"
                }}>
                    <h1>MAMPU Families</h1>
                </div>
            </div>
            
            <div className={styles.famList}>
                <div className={styles.li} style={{
                    backgroundImage: show1? "url(/curr-fam-bg.png)":"none", 
                    backgroundPositionY: "bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    marginTop: show1? "0px":"20px"
                }}>

                    <button 
                        onClick={toggle1} 
                        className={styles.famItem} 
                        style={{color: show1? "#A6C8E8":"#383769"}} > 
                        <img src={show1? "/down-arrow.png":"/show-toggler.png"} className={styles.famToggler}/> 
                        Current Families
                    </button>
                    <div style={{display: show1? "flex":"none"}} className={styles.famSection}>
                        <CardColumns className={styles.cardColumn}>
                            {currentFamily.map((a) =>(
                                <Card className={styles.cardFamContainer}>
                                    <Card.Img variant="top" src={`https:${a.familyPhoto.fields.file.url}`} className={styles.imgFam}/>
                                    <Card.Img variant="top" src="/fam-desc-bg.png" className={styles.ombakPutih}/>
                                    
                                    <Card.Body className={styles.descFam}>
                                        <Card.Title className={styles.titleFam}>{a.familyName}</Card.Title>
                                        <Card.Text className={styles.textFam}>
                                            {a.familyDesc}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}

                        </CardColumns>
                    </div>
                </div>
                <div className={styles.li} style={{marginTop: show1? "50px":"20px"}}>
                    <button onClick={toggle2} className={styles.famItem}> 
                        <img src="/show-toggler.png" style={{transform: show2? "rotate(90deg)":"none"}} 
                        className={styles.famToggler}/> 
                        Past Families
                    </button>
                    <div style={{display: show2? "flex":"none"}} className={styles.famSection}>
                        <CardColumns className={styles.cardColumn}>
                            {pastFamily.map((a) =>(
                                <Card className={styles.cardFamContainer}>
                                    <Card.Img variant="top" src={`https:${a.familyPhoto.fields.file.url}`} className={styles.imgFam}/>
                                    <Card.Img variant="top" src="/fam-desc-bg.png" className={styles.ombakPutih}/>
                                    
                                    <Card.Body className={styles.descFam}>
                                        <Card.Title className={styles.titleFam}>{a.familyName}</Card.Title>
                                        <Card.Text className={styles.textFam}>
                                            {a.familyDesc}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}

                        </CardColumns>
                    </div>
                </div>
            </div>
            <div className={styles.ombakKanan} style={{marginTop: show2? "50px":"300px"}}>
                <img src="/footer-fam.png" alt="vector" className={styles.ombakImg}/>
            </div>
        </div>
    )
}