import styles from "./Nav.module.css";
function Nav({ children }) {
  return <div className={`container ${styles.nav}`}>{children}</div>;
}

export default Nav;
