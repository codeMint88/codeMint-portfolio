import { useState } from "react";
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

  return (
    <div className={styles.navFixedContainer}>
      <a
        href="#Home"
        onClick={() => setActive("#Home")}
        className={active === "#Home" ? `${styles.active}` : ""}
      >
        <RoofHome />
      </a>
      <a
        href="#Projects"
        onClick={() => setActive("#Projects")}
        className={active === "#Projects" ? `${styles.active}` : ""}
      >
        <Idea />
      </a>
      <a
        href="#Contact"
        onClick={() => setActive("#Contact")}
        className={active === "#Contact" ? `${styles.active}` : ""}
      >
        <SendFast />
      </a>
      <a
        href="#Skills"
        onClick={() => setActive("#Skills")}
        className={active === "#Skills" ? `${styles.active}` : ""}
      >
        <ShoppingBasketHorizontal />
      </a>
      <ScrollToTop />
    </div>
  );
}

export default NavFixed;
