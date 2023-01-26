import styles from "./Main.module.css";
import mainImage from "../../assets/Main.png";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";
import { Section } from "../section";

const Main = () => {
  return (
    <Section paddingY="m" bgColor="Main">
      <div className={styles.mainContentContainer}>
        <div>
          <img src={mainImage} alt="daniel in iceland" />
        </div>
        <div className={styles.mainContentRight}>
          <h1>Daniel Wong</h1>
          <h2>
            I'm a full stack Software Engineer experienced in JavaScript and
            Python frameworks.
          </h2>
          <hr className={styles.divider} />
          <div className={styles.secondaryContentContainer}>
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin. He lay on
              his armour-like back, and if he lifted his head a little he could
              see his brown belly, slightly domed and divided by arches into
              stiff sections.
            </p>
            <Link to="#" className={styles.btnToProjects}>
              Projects
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Main;
