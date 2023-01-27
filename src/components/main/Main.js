import styles from "./Main.module.css";
import { Headshot } from "../../assets";
import { Section } from "../section";

const Main = () => {
  return (
    <Section paddingY="m" bgColor="Main">
      <div className={styles.mainContentContainer}>
        <div className={styles.mainImageContainer}>
          <img src={Headshot} alt="head shot of daniel" />
        </div>
        <div className={styles.mainContentRight}>
          <h1>Daniel Wong</h1>
          <h2>
            I'm a Full Stack Software Engineer experienced in{" "}
            <span className={styles.emphasize}>JavaScript</span> and{" "}
            <span className={styles.emphasize}>Python</span> frameworks.
          </h2>
          <div className={styles.socialLinksContainer}>
            <span className={styles.icons}>
              <a href="https://github.com/Daniel-Wong94">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#333333"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
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
          <div className={styles.secondaryContentContainer}>
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin. He lay on
              his armour-like back, and if he lifted his head a little he could
              see his brown belly, slightly domed and divided by arches into
              stiff sections.
            </p>
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
