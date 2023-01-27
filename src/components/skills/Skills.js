import styles from "./Skills.module.css";
import { Section } from "../section";
import SkillItem from "./SkillItem";
import ScrollTopBtn from "../../elements/ScrollTopBtn";

const skillItems = [
  {
    classname: "languages",
    name: "Programming Languages",
    skills: ["JavaScript(ES6)", "Python", "HTML", "CSS"],
  },
  {
    classname: "frameworks",
    name: "Libraries & Frameworks",
    skills: [
      "React",
      "Node.js",
      "Express",
      "Sequelize",
      "SQLite3",
      "Flask",
      "SQLAlchemy",
      "WebSockets",
      "Material UI",
      "AWS",
    ],
  },
  {
    classname: "tools",
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "Webpack", "Heroku", "Docker", "Render"],
  },
];

const Skills = () => {
  return (
    <Section scrollTo={"skills"} paddingY="l" bgColor="Secondary">
      <h1 className={styles.skillsHeading}>Skills</h1>
      <hr className={styles.divider} />
      <ScrollTopBtn />
      <div className={styles.skillsContentContainer}>
        {skillItems.map(({ classname, name, skills }, idx) => (
          <div className={styles[classname]} key={idx}>
            <SkillItem name={name} skills={skills} />
          </div>
        ))}
        <div className={styles.contact}>
          <h4>
            Contact me at daniel.kachun.wong@
            <br />
            gmail.com
          </h4>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
