import styles from "./Logo.module.css";

function Logo() {
  return (
    <figure className={styles.logo}>
      <img
        src="/codeMint-portfolio/images/codeMint_Logo.png"
        alt="Website logo"
      />
    </figure>
  );
}

export default Logo;
