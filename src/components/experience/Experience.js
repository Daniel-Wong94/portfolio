import { Section } from "../section";
import ExperienceItem from "./ExperienceItem";
import styles from "./Experience.module.css";
import { data } from "../../assets";

const Experience = () => {
  return (
    <Section paddingY="m" bgColor="Tertiary">
      <div className={styles.experienceContentContainer}>
        <div className={styles.experienceContentRight}>
          <h1>Experiences</h1>
          <hr />
          <p>{data["experienceSection"].description} </p>
        </div>
        <ul className={styles.timeline}>
          {data["experienceSection"].experiences.map((experience, idx) => (
            <ExperienceItem key={idx} experience={experience} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Experience;
