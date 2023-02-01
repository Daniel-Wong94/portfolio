import styles from "./Section.module.css";
import { useContext, useRef, useEffect } from "react";
import { IntersectionObserverContext } from "../../context/IntersectionObserverContext";

const Section = ({
  children,
  scrollTo,
  paddingY = "m",
  bgColor = "Main",
  fade = true,
}) => {
  const padding = `paddingY${paddingY}`;
  const bg = `sectionColor${bgColor}`;
  const sectionContentRef = useRef(null);

  const observer = useContext(IntersectionObserverContext);

  // on initial render, observe the div
  useEffect(() => {
    if (fade) observer.observe(sectionContentRef.current);
  }, [observer, fade]);

  return (
    <section
      id={scrollTo}
      className={styles[padding] + " " + styles[bg] + " " + styles.section}
    >
      <div ref={sectionContentRef}>{children}</div>
    </section>
  );
};

export default Section;
