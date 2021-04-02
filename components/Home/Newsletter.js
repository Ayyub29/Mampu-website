import styles from './Newsletter.module.css';
import { Form, Button} from 'react-bootstrap';
import React, { useRef, useState } from 'react';

export default function Newsletter() {
    const inputEl = useRef(null);
    const [message, setMessage] = useState('');

    const subscribe = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
            email: inputEl.current.value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
        });

        const { error } = await res.json();

        if (error) {
            setMessage(error);
            return;
        }

        inputEl.current.value = '';
        setMessage('Thank you for subscribing our newsletter!');
    };

    return (
        <div className={styles.Container}>
            <div className={styles.label}>
                <p className={styles.labelText}>Join our newsletter! </p>
            </div> 
            {/* <Form onSubmit={subscribe}   */}
            <Form className={styles.formContainer} data-netlify="true">
                <Form.Group className={styles.formInput} controlId="formBasicEmail">
                    <Form.Control className={styles.inputEmail} id="email-input" ref={inputEl} name="email" required id="email-input" ref={inputEl} name="email" type="email" placeholder="Enter your email here" />

                    <Form.Text className={styles.messageBottom}>
                        {message ? message : "We'll send you MAMPU newsletter every month."}
                    </Form.Text>
                </Form.Group>
                <div className={styles.sendBtnContainer}>
                    <Button type="submit" className={styles.joinBtn} >
                        JOIN
                    </Button>
                </div> 
            </Form>
             
        </div>

    )
  }