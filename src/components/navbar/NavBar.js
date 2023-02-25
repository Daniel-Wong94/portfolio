import styles from "./NavBar.module.css";
import { Section } from "../section";
import { data, Logo } from "../../assets";

// import { useState } from "react";

const NavBar = () => {
  // const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  // const toggleDropdown = () => setDropdownIsOpen((prev) => !prev);

  return (
    <Section scrollTo="top" paddingY="xs" bgColor="Main">
      <nav className={styles.navbarContainer}>
        <div className={styles.navLinkContainer}>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a
            href={data["links"].resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <a
          href={data["links"].resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.logo}
            src={Logo}
            alt="daniel wong logo"
            width="220px"
            height="48px"
          />
        </a>
      </nav>
    </Section>
  );
};

export default NavBar;
