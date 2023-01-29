import styles from "./ExperienceItem.module.css";

const ExperienceItem = ({ experience: { start, end, name, description } }) => {
  return (
    <li className={styles.experienceItemContainer}>
      <div className={styles.info}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.date}>
        {start} - {end}
      </div>
    </li>
  );
};

export default ExperienceItem;
