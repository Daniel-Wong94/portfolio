import styles from "./Main.module.css";
import { Section } from "../section";
import { data, GITHUB_LOGO, LINKEDIN_LOGO } from "../../assets";
import { Headshot } from "../../assets";

const Main = () => {
  return (
    <Section paddingY="m" bgColor="Main">
      <div className={styles.mainContentContainer}>
        <div className={styles.mainImageContainer}>
          <img src={Headshot} alt="head shot of daniel" />
        </div>
        <div className={styles.mainContentRight}>
          <h1>Daniel Wong</h1>
          <h2>{data["mainSection"].header}</h2>
          <div className={styles.socialLinksContainer}>
            <span className={styles.icons}>{GITHUB_LOGO}</span>
            <span className={styles.icons}>{LINKEDIN_LOGO}</span>
          </div>
          <hr className={styles.divider} />
          <h3>About Me</h3>
          <div className={styles.secondaryContentContainer}>
            <p>{data["mainSection"].about}</p>
            <a href="#projects" className={styles.btnToProjects}>
              Projects
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Main;
