
import styles from "../Footer/Footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles.footer}>
    <p>© 2024 My Portfolio. All rights reserved.</p>
    <div className={styles.socialIcons}>
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className={styles.icon} />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className={styles.icon} />
      </a>
      <a
        href="mailto:afsheen6441@gmail.com"
        aria-label="Email"
      >
        <FaEnvelope className={styles.icon} />
      </a>
    </div>
  </footer>
);

export default Footer;
