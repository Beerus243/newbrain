"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.navContainer}>
        {/* Logo à gauche */}
        <div className={styles.navLeft}>
          <Link href="/" legacyBehavior>
            <a onClick={closeMenu}>
              <Image src="/image/logo.png" alt="Logo" width={80} height={80} />
            </a>
          </Link>
        </div>

        {/* Menu central pour les écrans larges */}
        <div className={styles.navMiddle}>
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <Link href="/" legacyBehavior>
                <a onClick={closeMenu}>Accueil</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/Formation" legacyBehavior>
                <a onClick={closeMenu}>Formation AI</a>
              </Link>
            </li>
            <li className={styles.navItem}>Audit et Consulting</li>
            <li className={styles.navItem}>Ressource</li>
          </ul>
        </div>

        {/* Section droite : bouton et hamburger */}
        <div className={styles.navRight}>
          <Link href="/contact" legacyBehavior>
            <a
              className={`${styles.navButton} ${styles.navButtonPrimary}`}
              onClick={closeMenu}
            >
              Prendre un rendez-vous
            </a>
          </Link>

          {/* Bouton hamburger pour les écrans mobiles */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
        <ul className={styles.mobileNavMenu}>
          <li className={styles.navItem}>
            <Link href="/" legacyBehavior>
              <a onClick={closeMenu}>Accueil</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/Formation" legacyBehavior>
              <a onClick={closeMenu}>Formation AI</a>
            </Link>
          </li>
          <li className={styles.navItem}>Audit et Consulting</li>
          <li className={styles.navItem}>Ressource</li>
          <li className={styles.navItem}>
            <Link href="/contact" legacyBehavior>
              <a className={styles.navButton} onClick={closeMenu}>
                Prendre un rendez-vous
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
