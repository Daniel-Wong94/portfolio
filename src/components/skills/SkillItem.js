import styles from "./SkillItem.module.css";

const SkillItem = ({ name, skills }) => {
  return (
    <div className={styles.skillCardContainer}>
      <h4>{name}</h4>
      <ul className={styles.skillContainer}>
        {skills.map((skill, idx) => (
          <div className={styles.skillItem} key={idx}>
            {skill}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SkillItem;
