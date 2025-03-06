import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Navigation = () => {
  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        {/* Logo à gauche */}
        <Image src="/image/logo.png" alt="Logo" width={80} height={80} />
      </div>
      <div className={styles.navRight}>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Formation Ai</li>
          <li className={styles.navItem}>Audit et consulting</li>
          <li className={styles.navItem}>Ressource</li>
        </ul>
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
      <div className={styles.titre3}> ils ont été former par nous</div>
    </>
  );
};

export default Navigation;
