import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Section } from "../section";
import logo from "../../assets/Logo.png";

const NavBar = () => {
  return (
    <Section paddingY="xs" bgColor="Main">
      <nav className={styles.navbarContainer}>
        <div className={styles.navLinkContainer}>
          <Link to="#skills">Skills</Link>
          <Link to="#projects">Projects</Link>
          <Link to="#resume">Resume</Link>
        </div>
        <Link to="#" className={styles.logo}>
          <img src={logo} width="220px" height="48px" />
        </Link>
      </nav>
    </Section>
  );
};

export default NavBar;
