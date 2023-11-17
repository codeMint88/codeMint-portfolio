import { useEffect, useState } from "react";
import styles from "./TypingAnimation.module.css";
function TypingAnimation({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const textTimer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(textTimer);
      }
    }, 20);
    return () => clearInterval(textTimer);
  }, [text, currentIndex]);

  return <p className={styles.paragraph}>{displayText}</p>;
}

export default TypingAnimation;
