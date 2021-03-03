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
            <Form onSubmit={subscribe} className={styles.formContainer}>
            <Form.Group className={styles.formInput} controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id="email-input" ref={inputEl} name="email" required id="email-input" ref={inputEl} name="email" type="email" placeholder="Enter email" />

                <Form.Text className="text-muted">
                    {message ? message : "We'll send you MAMPU newsletter every month."}
                </Form.Text>
            </Form.Group>
            <div className={styles.sendBtnContainer}>
                <Button variant="primary" type="submit" >
                    Send
                </Button>
            </div>  
        </Form>
        </div>

    )
  }