"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Formation.module.css";

type Formation = {
  id: number;
  title: string;
  description?: string;
  points?: string[];
  image: string;
};

const formations: Formation[] = [
  // ... (le tableau formations reste inchangé)
];

export default function FormationPage() {
  return (
    <>
      <Header />
      <main className={styles.formationSection}>
        <div className={styles.horizontalScroll}>
          {formations.map((formation, index) => (
            <div
              key={formation.id}
              className={styles.card}
              style={{ "--i": index } as React.CSSProperties}
            >
              <img
                src={formation.image}
                alt={formation.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{formation.title}</h3>
                {formation.points ? (
                  <ul className={styles.cardList}>
                    {formation.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.cardDescription}>
                    {formation.description}
                  </p>
                )}
                <div className={styles.buttons}>
                  <button
                    className={"${styles.button} ${styles.btnAppointment}"}
                  >
                    Voir la Formation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
