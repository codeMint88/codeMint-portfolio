import { Linkedln, Whatsapp, Gmail } from "react-huge-icons/solid";
import styles from "./ContactSection.module.css";
import TitleUnderline from "./TitleUnderline";
import Form from "./Form";
function ContactSection() {
  return (
    <div id="Contact" className={` container ${styles.contactContainer}`}>
      <TitleUnderline title="Get In Touch" />
      <div className={styles.contactSection}>
        <div className={styles.leftContainer}>
          <article className={styles.contactOption}>
            <Gmail />
            <h4>Email</h4>
            <p>enemuothankgod@gmail.com</p>
            <a href="mailto:enemuothankgod@gmail.com"> Send a message</a>
          </article>

          <article className={styles.contactOption}>
            <Whatsapp />
            <h4>Whatsapp</h4>
            <p>+234-7056677543</p>
            <a href="https://api.whatsapp.com/send?phone=+2347056677543">
              Send a message
            </a>
          </article>

          <article className={styles.contactOption}>
            <Linkedln />
            <h4>LinkedIn</h4>
            <p>ThankGod Enemuo</p>
            <a href="https://www.linkedin.com/in/thankgod-enemuo-514870b9/">
              Visit profile
            </a>
          </article>
        </div>
        <div className={styles.rightContaner}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
