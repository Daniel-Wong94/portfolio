import styles from "./Skills.module.css";
import { Section } from "../section";
import SkillItem from "./SkillItem";
import ScrollTopBtn from "../../elements/ScrollTopBtn";
import { data } from "../../assets";

const Skills = () => {
  return (
    <Section scrollTo={"skills"} paddingY="l" bgColor="Secondary">
      <h1 className={styles.skillsHeading}>Skills</h1>
      <hr className={styles.divider} />
      <ScrollTopBtn />
      <div className={styles.skillsContentContainer}>
        {data["skillSection"].map(({ classname, name, skills }, idx) => (
          <div className={styles[classname]} key={idx}>
            <SkillItem name={name} skills={skills} />
          </div>
        ))}
        <div className={styles.contact}>
          <h4>
            Contact me at daniel.kachun.wong@
            <br className={styles.break} />
            gmail.com
          </h4>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
