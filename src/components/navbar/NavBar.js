import styles from "./NavBar.module.css";
import { Section } from "../section";
import { data, Logo } from "../../assets";

const NavBar = () => {
  return (
    <Section scrollTo="top" paddingY="xs" bgColor="Main">
      <nav className={styles.navbarContainer}>
        <div className={styles.navLinkContainer}>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href={data["links"].resume}>Resume</a>
        </div>
        <a href={data["links"].resume} className={styles.logo}>
          <img src={Logo} width="220px" height="48px" />
        </a>
      </nav>
    </Section>
  );
};

export default NavBar;
