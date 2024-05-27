import { useEffect, useState } from "react";
import styles from "./NavFixed.module.css";
import ScrollToTop from "./ScrollToTop";

import {
  RoofHome,
  ShoppingBasketHorizontal,
  Idea,
  SendFast,
} from "react-huge-icons/outline";

function NavFixed() {
  const [active, setActive] = useState("#Home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          setActive(`#${id}`);
          window.history.pushState(null, null, `#${id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={styles.navFixedContainer}>
      <a
        href="#Home"
        onClick={() => setActive("#Home")}
        className={active === "#Home" ? styles.active : ""}
      >
        <RoofHome />
      </a>
      <a
        href="#Skills"
        onClick={() => setActive("#Skills")}
        className={active === "#Skills" ? styles.active : ""}
      >
        <ShoppingBasketHorizontal />
      </a>
      <a
        href="#Projects"
        onClick={() => setActive("#Projects")}
        className={active === "#Projects" ? styles.active : ""}
      >
        <Idea />
      </a>
      <a
        href="#Contact"
        onClick={() => setActive("#Contact")}
        className={active === "#Contact" ? styles.active : ""}
      >
        <SendFast />
      </a>
      <ScrollToTop />
    </div>
  );
}

export default NavFixed;
