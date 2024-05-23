import { useEffect, useRef, useState } from "react";
import styles from "./ScrollToTop.module.css";

function ScrollToTop() {
  const [showBtn, setShowBtn] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // scrollHeight returns the invisible portion of the page, while innerheight returns the visible portion i.e the browsers viewport height.
      const scrollPercentage = Math.round((window.scrollY / pageHeight) * 100);

      ref.current.style.background = `conic-gradient(#03cc65 ${scrollPercentage}%, #d7d7d7 ${scrollPercentage}%)`;

      setShowBtn(scrollPercentage >= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={ref}
      onClick={ScrollToTop}
      style={{
        display: showBtn ? "flex" : "none",
      }}
      className={styles.goToTopBtn}
    >
      <figure className={styles.arrowContainer}>
        <img
          src="/codeMint-portfolio/images/arrow-up.png"
          alt="arrow-up"
          width="512"
          height="512"
        />
        <figcaption className="sr-only"> arrow btn </figcaption>
      </figure>
    </button>
  );
}

export default ScrollToTop;
