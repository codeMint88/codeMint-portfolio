import styles from "./Nav.module.css";
function Nav({ children }) {
  return (
    <div id="Home" className={`container ${styles.nav}`}>
      {children}
    </div>
  );
}

export default Nav;
