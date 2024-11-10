
import React from "react";
import styles from '../app/styles/Home.module.css';

import Hero from "./components/Hero/Hero";




const Home = () => (
  <div className={styles.homeContainer}>
    
    <main className={styles.mainContent}>
      <section className={styles.section}>
        <Hero />
      </section>
   
    </main>
    
  </div>
);

export default Home;
