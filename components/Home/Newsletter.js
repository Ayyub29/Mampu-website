import styles from './Newsletter.module.css';
import { Form, Button} from 'react-bootstrap';

export default function Newsletter() {
    return (
        <Form className={styles.formContainer}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll send you MAMPU newsletter every month.
                </Form.Text>
            </Form.Group>
            <div className={styles.sendBtnContainer}>
                <Button variant="primary" type="submit" >
                    Send
                </Button>
            </div>
            
        </Form>
    )
  }