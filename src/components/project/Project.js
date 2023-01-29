import { Section } from "../section";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import ScrollTopBtn from "../../elements/ScrollTopBtn";
import { data, DocuSync, Instantgram, Meetup } from "../../assets";

const Project = () => {
  const images = [DocuSync, Instantgram, Meetup];

  return (
    <Section scrollTo="projects" paddingY="m" bgColor="Tertiary2">
      <div className={styles.projectContentContainer}>
        <h1>Projects</h1>
        <hr />
        <ScrollTopBtn />
        <div className={styles.projectContainer}>
          {data["projectSection"].map((project, idx) => (
            <ProjectCard key={idx} project={project} image={images[idx]} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Project;
