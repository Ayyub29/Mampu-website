import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from './Navbars.module.css'

export default function Navbars() {
  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.navbars} class="d-flex">
        <Navbar.Brand href="#home"  className={styles.brandContainer} class="mr-auto p-2">
          <img src="/mampu-icon.svg" alt="Mampu Logo" className={styles.mampuLogo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto p-2">
            <Nav.Link href="#home" className={styles.navLink}>About Us</Nav.Link>
            <Nav.Link href="#link" className={styles.navLink}>MAMPU Families</Nav.Link>
            <Nav.Link href="#link" className={styles.navLink}>Meet The Team</Nav.Link>
            <Nav.Link href="#link" className={styles.navLink}>Contact Us</Nav.Link>
            <NavDropdown title={<span className={styles.navLink}>Language</span>} className={styles.navLink} id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Indonesia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
