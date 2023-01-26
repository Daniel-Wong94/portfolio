import styles from "./SkillItem.module.css";

const SkillItem = ({ name, skills }) => {
  return (
    <div className={styles.skillItemContainer}>
      <h4>{name}</h4>
      <ul className={styles.skillItems}>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillItem;
