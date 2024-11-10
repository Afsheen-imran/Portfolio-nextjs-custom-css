
"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../about/About.module.css";

const About: React.FC = () => {
  return (
    <div id="about" className={styles.container}>
      <section className={styles.section}>
        <div className={styles.contentContainer}>
           {/* Image Animation */}
           <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              className={styles.image}
              alt="Afsheen Imran"
              src="/images/my-image2.jpeg"
              width={300}
              height={400}
            />
          </motion.div>
          {/* Text Animation */}
          <motion.div
            className={styles.textWrapper}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.paragraph}>
              I am a frontend web developer, social media marketer, Shopify store specialist, content writer, and graphic designer with over 2 years of experience. I specialize in creating responsive websites using HTML, CSS, JavaScript, TypeScript, React, and Next.js, and I help businesses grow through effective social media campaigns and optimized Shopify stores. My skills in content writing and design allow me to deliver creative, engaging solutions that connect with audiences and elevate brands.
            </p>
            <p className={styles.paragraph}>
              With a comprehensive skill set and a commitment to delivering high-quality work, I am here to help businesses and individuals transform their ideas into reality. Let us connect and bring your vision to life!
            </p>
            
            {/* Button Animation */}
            <motion.div
              className={styles.buttonWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a href="https://www.linkedin.com/in/afsheen-imran-b623a42a2/" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className={styles.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
