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
              <li className={styles.navItem}>Home</li>
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
      <div className={styles.headerText}>
        <h6 className={styles.titre1}>FORMATION IA POUR PROFESSIONNELS & PARTICULIERS</h6>
        <h1 className={styles.titre2}>
          Gagnez en productivité
          <br />
          <span className={styles.highlight}>grâce à l'IA</span>
        </h1>
        <p className={styles.paragraphe}>
          Newbrain est un cabinet de conseil spécialisé en 
          intelligence artificielle. Nous proposons des formations
           en intelligence artificielle ainsi que des prestations d'audit et
            de conseil pour décupler la productivité des entreprises.
        </p>
        <div className={styles.buttons}>
          <Link href="/contact" legacyBehavior>
            <button className={`${styles.button} ${styles.btnAppointment}`}>
              Prenez rendez-vous
            </button>
          </Link>
          <button className={`${styles.button} ${styles.btnTraining}`}>
            Nos formations
          </button>
        </div>
        <p className={styles.titre3}>Ils ont été formés par nous</p>
      </div>
    </>
  );
};

export default Navigation;
