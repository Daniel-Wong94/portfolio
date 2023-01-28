import { Section } from "../section";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import ScrollTopBtn from "../../elements/ScrollTopBtn";
import { data } from "../../assets";

const Project = () => {
  return (
    <Section scrollTo="projects" paddingY="m" bgColor="Tertiary2">
      <div className={styles.projectContentContainer}>
        <h1>Projects</h1>
        <hr />
        <ScrollTopBtn />
        <div className={styles.projectContainer}>
          {data["projectSection"].map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Project;
