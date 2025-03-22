"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main Navigation">
      <div className={styles.navContainer}>
        {/* Logo à gauche */}
        <div className={styles.navLeft}>
          
            <a>
              <Image src="/image/logo.png" alt="Logo" width={80} height={80} />
            </a>
          
        </div>

        {/* Menu central pour les écrans larges */}
        <div className={styles.navMiddle}>
          <ul className={styles.navMenu}>
          <Link href="/" legacyBehavior>
            <li className={styles.navItem}>Accueil</li>
            </Link>
            <Link href="/Formation">
            <li className={styles.navItem}>Formation AI</li>
            </Link>
            <li className={styles.navItem}>Audit et Consulting</li>
            <li className={styles.navItem}>Ressource</li>
          </ul>
        </div>
                  {/* Bouton "Prendre un rendez-vous" */}
                  <button className={`${styles.navButton} ${styles.navButtonPrimary}`}>
            Prendre un rendez-vous
          </button>

        {/* Hamburger pour les écrans mobiles */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
        <ul className={styles.mobileNavMenu}>
        <Link href="/" legacyBehavior>
          <li className={styles.navItem}>Accueil</li>
          </Link>
          <Link href="/Formation">
          <li className={styles.navItem}>Formation AI</li>
          </Link>
          <li className={styles.navItem}>Audit et Consulting</li>
          <li className={styles.navItem}>Ressource</li>
          <li className={styles.navItem}>
            <button className={styles.navButton}>Prendre un rendez-vous</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
