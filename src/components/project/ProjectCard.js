import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, image }) => {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectImageContainer}>
        <img src={image} alt={`A screenshot of ${project.name}`} />
      </div>
      <h2 className={styles.projectName}>{project.name}</h2>
      <div className={styles.linkContainer}>
        {Object.entries(project.links).map(([name, url], idx) => (
          <a href={url} key={idx} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        ))}
      </div>
      <p>{project.description}</p>
      <span className={styles.techStack}>{project.tech.join(" · ")}</span>
    </div>
  );
};

export default ProjectCard;
