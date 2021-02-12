import { Navbar, Nav} from 'react-bootstrap';
import styles from './Navbars.module.css'


export default function Navbars() {
  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.navbars} class="d-flex">
        <Navbar.Brand href="/"  className={styles.brandContainer} class="mr-auto p-2">
          <img src="/mampu-icon.svg" alt="Mampu Logo" className={styles.mampuLogo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto p-2">
            <Nav.Link href="/About" className={styles.navLink}>About Us</Nav.Link>
            <Nav.Link href="/Families" className={styles.navLink}>MAMPU Families</Nav.Link>
            <Nav.Link href="/Team" className={styles.navLink}>Meet The Team</Nav.Link>
            <Nav.Link href="/Contact" className={styles.navLink}>Contact Us</Nav.Link>

            <select id="language" className={styles.navLinkLanguage}>
              <option value="eng">English</option>
              <option value="ind">Indonesia</option>
            </select>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
