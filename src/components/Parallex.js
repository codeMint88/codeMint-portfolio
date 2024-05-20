import { useRef } from "react";
import styles from "./Parallex.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallex({ title }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textYParallex = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const imageParallex = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className={styles.parallex_container}>
      <motion.h1 style={{ y: textYParallex }}>{title}</motion.h1>
      <motion.div className={styles.moutain}></motion.div>
      <motion.div
        style={{ y: imageParallex }}
        className={styles.planets}
      ></motion.div>
      <motion.div
        style={{ x: imageParallex }}
        className={styles.moon}
      ></motion.div>
    </div>
  );
}

export default Parallex;
