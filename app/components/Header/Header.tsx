"use client"

import React, { useState } from "react";
import Link from "next/link";
import styles from "../Header/Header.module.css";
import { FiAlignJustify } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoText}>
          My Portfolio
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className={styles.mobileNav}>
        <Sheet open={isMenuOpen} onOpenChange={toggleMenu}>
          <SheetTrigger>
            <button className={styles.hamburgerButton}>
              <FiAlignJustify size={24} />
            </button>
          </SheetTrigger>

          {/* Remove position and size props */}
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigate through sections</SheetDescription>
            </SheetHeader>
            <nav>
              <ul className={styles.navListMobile}>
                <li className={styles.navItem}>
                  <Link href="/about" className={styles.navLinkMobile}>
                    About
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/skills" className={styles.navLinkMobile}>
                    Skills
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/projects" className={styles.navLinkMobile}>
                    Projects
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/contact" className={styles.navLinkMobile}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
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

      {/* LinkedIn Button */}
      <div className={styles.cta}>
        <Link
          href="https://www.linkedin.com/in/afsheen-imran-b623a42a2/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          LinkedIn
        </Link>
      </div>
    </header>
  );
};

export default Header;
