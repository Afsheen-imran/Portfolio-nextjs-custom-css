"use client";

import styles from "../Hero/Hero.module.css";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link component from Next.js

const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={styles.hero}
  >
    <div className={styles.content}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        I am a dedicated frontend web developer, content creator, and designer,
        passionate about crafting digital experiences. Explore my skills,
        projects, and journey in the world of web development!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link href="/projects" className={styles.ctaButton}> 
          View My Work
        </Link>
      </motion.div>
    </div>
  </motion.section>
);

export default Hero;
