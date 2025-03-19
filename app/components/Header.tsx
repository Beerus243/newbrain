"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          {/* Logo à gauche */}
          <Image src="/image/logo.png" alt="Logo" width={80} height={80} />
        </div>
        <div className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles.navRight} ${menuOpen ? styles.active : ""}`}>
          <div className={`${styles.navMenuContainer} ${menuOpen ? styles.active : ""}`}>
            <ul className={styles.navMenu}>
              <Link href="/" legacyBehavior>
              <li className={styles.navItem}>Home</li>
              </Link>
              <li className={styles.navItem}>Formation Ai</li>
              <li className={styles.navItem}>Audit et consulting</li>
              <li className={styles.navItem}>Ressource</li>
              <li className={styles.navItemMobile}>
                <Link href="/contact" legacyBehavior>
                  <a>Contact</a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <button className={styles.navButton}>Prendre un rendez-vous</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.navButtonContainer}>
            <Link href="/contact" legacyBehavior>
              <button className={styles.navButton}>Prendre un rendez-vous</button>
            </Link>
          </div>
        </div> 
      </nav>
    </>
  );
};

export default Navigation;
