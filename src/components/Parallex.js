import styles from "./Parallex.module.css";
function Parallex() {
  return (
    <div className={styles.parallex_container}>
      <h1>Completed Projects</h1>
      <div className={styles.moutain}></div>
      <div className={styles.planets}></div>
      <div className={styles.moon}></div>
    </div>
  );
}

export default Parallex;
