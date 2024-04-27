import styles from "./Logo.module.css";

function Logo() {
  return (
    <figure className={styles.logo}>
      <img src="/codeMint_logo.png" alt="Website logo" />
    </figure>
  );
}

export default Logo;
