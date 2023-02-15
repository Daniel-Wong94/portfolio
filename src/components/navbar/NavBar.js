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
          {/* <div
            className={
              styles.hamburger + " " + styles[dropdownIsOpen && "open"]
            }
            onClick={toggleDropdown}
          >
            <div className={styles.hamburgerBar}></div>
            <div className={styles.hamburgerBar}></div>
            <div className={styles.hamburgerBar}></div>
            {dropdownIsOpen && (
              <div className={styles.dropDown}>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href={data["links"].resume}>Resume</a>
              </div>
            )}
          </div> */}
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href={data["links"].resume}>Resume</a>
        </div>
        <a href={data["links"].resume}>
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
