import styles from "./SkillSection.module.css";
import { ELearning, CheckMarkRectangle } from "react-huge-icons/outline";
import { ArchiveAdd } from "react-huge-icons/bulk";
import TitleUnderline from "./TitleUnderline";

function SkillSection() {
  return (
    <section id="Skills" className={`container ${styles.skillContainer}`}>
      <TitleUnderline title="Tech Stack and Experience" />
      <div className={styles.skillSectionContainer}>
        <div className={styles.leftContainer}>
          <article className={styles.article}>
            <ELearning className={styles.icon} />
            <div>
              <p>{new Date().getFullYear() - 2023}+ Years of Working</p>
              <h5>Experience</h5>
            </div>
          </article>

          <article className={styles.article}>
            <CheckMarkRectangle className={styles.icon} />
            <div>
              <p>2+ Completed</p>
              <h5>Projects</h5>
            </div>
          </article>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightInnerContainer}>
            <h3> Front-End Development</h3>
            <div className={styles.rightArticle}>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>HTML</h5>
                  <small>Proficient</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>CSS</h5>
                  <small>Proficient</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>JavaScript</h5>
                  <small>Proficient</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>TypeScript</h5>
                  <small>Fundamentals</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>Tailwind</h5>
                  <small>Intermediate</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>React</h5>
                  <small>Proficient</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>Next.js</h5>
                  <small>Fundamentals</small>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightInnerContainer}>
            <h3> Back-End Development</h3>
            <div className={styles.rightArticle}>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>Node Js</h5>
                  <small>Proficient</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>Ejs</h5>
                  <small>Proficient</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>Mongo DB</h5>
                  <small>Proficient</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>Supabase</h5>
                  <small>Proficient</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>SQL</h5>
                  <small>Intermediate</small>
                </div>
              </div>
              <div className={styles.rightDetailsContainer}>
                <div>
                  <ArchiveAdd className={styles.rightContainerIcon} />
                </div>
                <div>
                  <h5>AWS</h5>
                  <small>Fundamentals</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
