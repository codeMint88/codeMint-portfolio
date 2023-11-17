import styles from "./TitleUnderline.module.css";
function TitleUnderline({ title }) {
  return (
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
      <div className={styles.underline}></div>
    </div>
  );
}

export default TitleUnderline;
