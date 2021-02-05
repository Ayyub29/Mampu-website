import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div class={styles.footerAtas}>
        <img src="/mampu-icon.svg" alt="Mampu Logo" className={styles.mampuLogo} />
          <div class={styles.headquarterText}>
              <p class={styles.title}>Headquarters</p>
              <p class={styles.desc}>Jl. Alamat 1 No.23, Jakarta Selatan, DKI Jakarta </p>
          </div>
          <div class={styles.contactText}>
              <p class={styles.title}>Contact</p>
              <p class={styles.desc}> 
                  <img src="/whatsapp-icon.svg" alt="Whatsapp icon" className={styles.whatsappLogo} /> &#160;
                  +62-8515-515-8299 (Albert)
              </p>
          </div>
          <div class={styles.followusText}>
              <p class={styles.title}>Follow Us</p>
              <a href="mailto:contact@mampu.org" class={styles.desc}> 
                  <img src="/pesan-icon.svg" alt="Email icon" className={styles.whatsappLogo} /> &#160;
                  contact@mampu.org 
              </a>
              <br></br>
              <a href="https://www.instagram.com/inisiatif.mampu/"  class={styles.desc}> 
                  <img src="/instagram-icon.svg" alt="Instagram icon" className={styles.whatsappLogo} /> &#160;
                  @inisiatif.mampu /@mampu.initiative
              </a>
              <br></br>
              <a href="https://www.linkedin.com/company/mampu-initiative/"  class={styles.desc}> 
                  <img src="/linkedin-icon.svg" alt="Linkedin icon" className={styles.whatsappLogo} /> &#160;
                  MAMPU Initiative
              </a>
          </div>
        </div>
        <div className={styles.footerBawah}>
          <p>2021 Inisiatif Mampu.  All Rights Reserved</p>

        </div>
      </footer>
    </>
  )
}
