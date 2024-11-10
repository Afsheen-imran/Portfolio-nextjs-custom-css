"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../Header/Header.module.css";
import { FiAlignJustify } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoText}>
          My Portfolio
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/skills" className={styles.navLink}>
              Skills
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects" className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation (Directly in Header) */}
      <div className={styles.mobileNav}>
        <button
          className={styles.hamburgerButton}
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <FiAlignJustify size={24} />
        </button>

        {/* Mobile menu links displayed directly on screen */}
        <nav className={`${styles.mobileLinks} ${isMenuOpen ? styles.mobileLinksOpen : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/skills" className={styles.navLink}>
                Skills
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/projects" className={styles.navLink}>
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
