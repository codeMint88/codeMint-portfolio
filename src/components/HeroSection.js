import AnimatedText from "./AnimatedText";
import styles from "./HeroSection.module.css";
import TitleUnderline from "./TitleUnderline";
import TypingAnimation from "./TypingAnimation";
import { motion } from "framer-motion";
function HeroSection() {
  return (
    <section className={` container ${styles.heroSection}`}>
      <div className={`${styles.heroLeft} ${styles.gritItem}`}>
        <TitleUnderline title="Welcome to my Coding Playground!" />
        <TypingAnimation text="I'm the architect behind those captivating user interfaces that breathe life into your ideas, and I'm the code maestro crafting robust server-side logic that powers your digital dreams. It's like combining the creativity of an artist with the precision of a mathematician." />
        <div className={styles.heroBtnContainer}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
            transition={{ duration: 0.125, ease: "easeInOut" }}
            href="ThankGod N Enemuo CV.pdf"
            download="myCV.pdf"
            target="_blank"
          >
            Download CV
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.05 }}
            whileHover={{ scale: 0.95, rotate: "2.5deg" }}
            transition={{ duration: 0.125, ease: "easeInOut" }}
            href="#contact"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
      <div className={`${styles.heroRight} ${styles.gritItem}`}>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            duration: 2,
          }}
          className={styles.heroImageContainer}
        >
          <div className={styles.heroImageBg1}></div>
          <div className={styles.heroImageBg2}></div>
          <div className={styles.heroImage}></div>
        </motion.div>
        <div className={styles.heroAboutMeContainer}>
          <p>
            Hey there, I'm ThankGod Enemuo, <br /> a product driven Full-Stack
            Developer
          </p>
          <h1>
            I build <br />
            <AnimatedText /> Apps
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
