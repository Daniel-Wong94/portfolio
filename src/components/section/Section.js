import styles from "./Section.module.css";

const Section = ({ children, paddingY = "m", bgColor = "Main" }) => {
  const padding = `paddingY${paddingY}`;
  const bg = `sectionColor${bgColor}`;

  return (
    <section className={styles[padding] + " " + styles[bg]}>{children}</section>
  );
};

export default Section;
