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
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/image/logo.png" alt="Logo" width={80} height={80} />
            </a>
          </Link>
        </div>

        {/* Hamburger à droite */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
        <ul className={styles.mobileNavMenu}>
          <li className={styles.navItem}>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/formation-ai" legacyBehavior>
              <a>Formation AI</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/audit-consulting" legacyBehavior>
              <a>Audit et Consulting</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/ressource" legacyBehavior>
              <a>Ressource</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" legacyBehavior>
              <button className={styles.navButton}>Prendre un rendez-vous</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
