import styles from './FamiliesMember.module.css'
import React, { useState } from 'react';
import { CardColumns, Card} from 'react-bootstrap';

export default function FamiliesMember() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);


    function toggle1(){
        setShow1(!show1);
    }
    function toggle2(){
        setShow2(!show2);
    }

    return(
        <div className={styles.famList}>
            <ul>
                <li>
                    <button onClick={toggle1} className={styles.famItem}> <img src="/show-toggler.png" style={{transform: show1? "rotate(90deg)":"none"}} className={styles.famToggler}/> Current Families</button>\
                    <div style={{display: show1? "flex":"none"}}>
                        <CardColumns>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                <Card.Title>Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                <Card.Title>Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text b
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                <Card.Title>Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card w
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                <Card.Title>Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                <Card.Title>Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            
                        </CardColumns>
                    </div>
                </li>
                <li>
                    <button onClick={toggle2} className={styles.famItem}> <img src="/show-toggler.png" style={{transform: show2? "rotate(90deg)":"none"}} className={styles.famToggler}/> Past Families</button>
                </li>
            </ul>
        </div>
    )
}