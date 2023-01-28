import { Section } from "../section";
import styles from "./Footer.module.css";
import { data } from "../../assets";

const Footer = () => {
  return (
    <Section paddingY="s" bgColor="Tertiary3">
      <div className={styles.footerContainer}>
        <div className={styles.footerContentLeft}>
          <h3>
            Daniel.Kachun.Wong@
            <br className={styles.break} />
            gmail.com
          </h3>
          <p>Site was designed by Sidebay Studio and built by me with React.</p>
        </div>
        <div className={styles.footerContentRight}>
          <h4>Get In Touch</h4>
          <p>
            I'm currently looking for an opportunity to join a team that
            promotes learning, collaboration, and mentorship. If that sounds
            like you, please feel free to contact me. You can best reach me via{" "}
            <a href={data["links"].linkedin}>LinkedIn</a> or by{" "}
            <a href={`mailto:${data["links"].email}?subject="Hello!"`}>Email</a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
