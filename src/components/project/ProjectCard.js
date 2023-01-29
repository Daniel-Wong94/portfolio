import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, image }) => {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectImageContainer}>
        <img src={image} alt={`A screenshot of ${project.name}`} />
      </div>
      <h2>{project.name}</h2>
      <div className={styles.linkContainer}>
        <a href={project.github}>Github</a>
        <a href={project.liveLink}>Live Link</a>
      </div>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
