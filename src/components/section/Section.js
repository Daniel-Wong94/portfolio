import styles from "./Section.module.css";

const Section = ({ children, scrollTo, paddingY = "m", bgColor = "Main" }) => {
  const padding = `paddingY${paddingY}`;
  const bg = `sectionColor${bgColor}`;

  return (
    <section
      id={scrollTo}
      className={styles[padding] + " " + styles[bg] + " " + styles.section}
    >
      {children}
    </section>
  );
};

export default Section;
