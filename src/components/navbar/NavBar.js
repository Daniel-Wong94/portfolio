import styles from "./NavBar.module.css";
import { Section } from "../section";
import logo from "../../assets/Logo.png";

const NavBar = () => {
  const resumeLink =
    "https://docs.google.com/document/d/e/2PACX-1vSV9UxZ3wF49D_ZhAATLjrxk5d1qzj2kiYa7HIUYuKUu28b8j98KlvdXK3H_JUpocqrPK2F5ABzMx5T/pub";

  return (
    <Section scrollTo="top" paddingY="xs" bgColor="Main">
      <nav className={styles.navbarContainer}>
        <div className={styles.navLinkContainer}>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href={resumeLink}>Resume</a>
        </div>
        <a href={resumeLink} className={styles.logo}>
          <img src={logo} width="220px" height="48px" />
        </a>
      </nav>
    </Section>
  );
};

export default NavBar;
