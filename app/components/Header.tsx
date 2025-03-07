"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import responsiveStyles from "./responsive.module.css";

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
        <div className={responsiveStyles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles.navRight} ${menuOpen ? responsiveStyles.active : ""}`}>
          {/* Box pour les liens */}
          <div className={`${styles.navMenuContainer} ${menuOpen ? responsiveStyles.active : ""}`}>
            <ul className={styles.navMenu}>
              <li className={styles.navItem}>Home</li>
              <li className={styles.navItem}>Formation Ai</li>
              <li className={styles.navItem}>Audit et consulting</li>
              <li className={styles.navItem}>Ressource</li>
            </ul>
          </div>
          {/* Bouton "Prendre un rendez-vous" */}
          <div className={styles.navButtonContainer}>
            <button className={styles.navButton}>Prendre un rendez-vous</button>
          </div>
        </div>
      </nav>
      <h6 className={styles.titre1}> FORMATION IA POUR PROFESSIONNELS & PARTICULIERS </h6>
      <h1 className={styles.titre2}> Gagnez en productivité<br /> grace à l'IA </h1>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.btnAppointment}`}>
          Prenez rendez-vous
        </button>
        <button className={`${styles.button} ${styles.btnTraining}`}>
          Nos formations
        </button>
      </div>
      <p className={styles.titre3}> ils ont été former par nous</p>
    </>
  );
};

export default Navigation;
