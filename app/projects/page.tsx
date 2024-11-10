"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 
import Link from "next/link"; 
import styles from "../projects/Project.module.css";

const Project: React.FC = () => {
  const projects = [
    {
      src: '/images/proj_1.jpg',
      title: 'CLI Calculator',
      description: 'Transform your command line with our CLI Calculator, crafted with TypeScript and Node.js, featuring an intuitive interface.',
      link: 'https://github.com/Afsheen-imran/Simple-Calculator.git',
    },
    {
      src: '/images/proj_2.jpg',
      title: 'CLI Number Guessing Game',
      description: 'Test your skills in guessing the secret number in our CLI Number Guessing Game.',
      link: 'https://github.com/Afsheen-imran/Number-Guessing-Game.git',
    },
    {
      src: '/images/proj_3.jpg',
      title: 'CLI ATM Machine',
      description: 'Enjoy convenient banking with our CLI ATM Machine designed with TypeScript, Node.js, and Inquirer.',
      link: 'https://github.com/Afsheen-imran/ATM-Machine.git',
    },
    {
      src: '/images/proj_4.jpg',
      title: 'CLI To Do List',
      description: 'Manage tasks with ease using our CLI To-Do List, built for the command line.',
      link: 'https://github.com/Afsheen-imran/To-do-list-app.git',
    },
    {
      src: '/images/hackthon.png',
      title: 'Dynamic Resume Builder',
      description: 'A responsive, real-time resume builder with editing features.',
      link: 'https://m-ilestone-3-dynamic-resume-builder.vercel.app/',
    },
    {
      src: '/images/pizza-parlour.jpg',
      title: 'Pizza Delight Website',
      description: 'Explore dynamic pizza flavors with a website using Next.js, Tailwind CSS, and TypeScript.',
      link: 'https://assignment-2-components.vercel.app/',
    },
    {
      src: '/images/countdown-timer.gif',
      title: 'Countdown timer',
      description: 'A sleek and interactive countdown timer made with Next.js and TypeScript.',
      link: '',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.heading}>My Projects</h1>
        <div className={styles.wrap}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                alt={project.title}
                className={styles.image}
                src={project.src}
                width={500}
                height={300} 
                objectFit="cover" 
              />
              <div className={styles.info}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View Project...
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
