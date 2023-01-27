import { Section } from "../section";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Section paddingY="s" bgColor="Tertiary3">
      <div className={styles.footerContainer}>
        <div className={styles.footerContentLeft}>
          <h3>
            Daniel.Kachun.Wong@
            <br />
            gmail.com
          </h3>
          <p>Thank you for visiting my portfolio.</p>
        </div>
        <div className={styles.footerContentRight}>Contact</div>
      </div>
    </Section>
  );
};

export default Footer;
