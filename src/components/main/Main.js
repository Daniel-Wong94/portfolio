import styles from "./Main.module.css";
import { Section } from "../section";
import { data, GITHUB_LOGO } from "../../assets";
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
            <span className={styles.icons}>
              <a href="https://github.com/Daniel-Wong94">{GITHUB_LOGO}</a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/daniel-kachun-wong/">
                <span className={styles.icons}>
                  <svg viewBox="0 50 512 512">
                    <path
                      fill="#333333"
                      d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
                    C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
                    M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
                    c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
                    s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"
                    />
                  </svg>
                </span>
              </a>
            </span>
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
