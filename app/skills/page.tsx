"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../skills/Skills.module.css";

const Skill: React.FC = () => {
  const skills = [
    { name: "HTML", level: "100%" },
    { name: "CSS", level: "95%" },
    { name: "JavaScript/TypeScript", level: "90%" },
    { name: "Graphic Designing", level: "90%" },
    { name: "Social Media Marketing", level: "95%" },
    { name: "Content Writing", level: "95%" },
    { name: "Next.js/React", level: "60%" },
    { name: "WordPress Web Development", level: "80%" },
  ];

  return (
    <div id="skills" className={styles.skillsContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.skillsTitle}>My Skills</h1>
        <div className={styles.skillListContainer}>
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.skillCardContent}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillCircle} />
                  <h2 className={styles.skillName}>{skill.name}</h2>
                </div>
                <div className={styles.skillProgressContainer}>
                  <motion.div
                    className={styles.skillProgressBar}
                    initial={{ width: "0%" }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1 }}
                  />
                  <p className={styles.skillLevel}>{skill.level}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
