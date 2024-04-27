import styles from "./NavPicture.module.css";

function NavPicture({ pieSize, imgSize, colour1, colour2, colour3, colourbg }) {
  const pieStyle = {
    width: `${pieSize}px`,
    height: `${pieSize}px`,
    borderRadius: "50%",
    background: `conic-gradient(at 50% 50%, ${colour1} 0% 28.3%, ${colourbg} 28.3% 33.3% , ${colour2} 33.3% 61.6%, ${colourbg} 61.6% 66.6%, ${colour3} 66.6% 95%, ${colourbg} 95% 100%)`,
  };

  const imgStyle = {
    width: `${imgSize}px`,
    height: `${imgSize}px`,
    borderRadius: "50%",
    overflow: "hidden",
    zIndex: "1",
    border: `2px solid ${colourbg}`,
  };

  return (
    <div className={styles.navPicContainer}>
      <div style={pieStyle} className={styles.pie}></div>
      <figure style={imgStyle} className={styles.imgContainer}>
        <picture>
          <source srcSet="/portfolio_img1-transformed.avif" type="image/avif" />
          <img
            src="/portfolio_img1-transformed.jpeg"
            alt="Portfolio"
            width="320"
            height="280"
          />
        </picture>
        <figcaption className="sr-only"> Portfolio picture </figcaption>
      </figure>
    </div>
  );
}

export default NavPicture;
