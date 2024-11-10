import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>Contact Me</h1>
        <p>Feel free to get in touch for collaboration, inquiries, or just a chat!</p>
      </section>

      <section className={styles.contactForm}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </section>
      
      <section className={styles.footer}>
        <p>If you prefer, you can also reach me through my email at: <a href="mailto:afsheen6441@gmail.com">afsheen6441@gmail.com</a></p>
      </section>
    </div>
  );
};

export default Contact;
