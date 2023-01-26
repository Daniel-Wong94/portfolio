import styles from "./ExperienceItem.module.css";

const ExperienceItem = ({ experience: { start, end, name, description } }) => {
  return (
    <li className={styles.experienceItemContainer}>
      <div className={styles.date}>
        {start} - <br />
        {end}
      </div>
      <div className={styles.info}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ExperienceItem;
