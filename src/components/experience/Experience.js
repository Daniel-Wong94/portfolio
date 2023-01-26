import { Section } from "../section";
import ExperienceItem from "./ExperienceItem";
import styles from "./Experience.module.css";

const experiences = [
  {
    start: "Feb 2022",
    end: "Feb 2023",
    name: "App Academy",
    description: "One year, Part time Full Stack Software Engineering Bootcamp",
  },
  {
    start: "July 2017",
    end: "Current",
    name: "NYU Langone School of Medicine",
    description: "Senior MRI Specialist",
  },
  {
    start: "Sept 2013",
    end: "July 2017",
    name: "SUNY Stony Brook University",
    description: "B.S in Health Science and Minor in Biology",
  },
];

const Experience = () => {
  return (
    <Section paddingY="m" bgColor="Tertiary">
      <div className={styles.experienceContentContainer}>
        <ul className={styles.timeline}>
          {experiences.map((experience, idx) => (
            <ExperienceItem key={idx} experience={experience} />
          ))}
        </ul>
        <div className={styles.experienceContentRight}>
          <h1>Experiences</h1>
          <hr />
          <p>
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin. He lay on
              his armour-like back, and if he lifted his head a little he could
              see his brown belly, slightly domed and divided by arches into
              stiff sections.
            </p>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
