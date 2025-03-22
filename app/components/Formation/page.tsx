"use client";
import React from "react";
import styles from "./body.module.css";
import {
  FaSink,
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaMoneyBillWave,
  FaUserFriends,
  FaUserGraduate,
} from "react-icons/fa";
import { SiNike } from "react-icons/si";
import Link from "next/link";

type Formation = {
  id: number;
  title: string;
  description?: string;
  points?: string[];
  image: string;
};

const formations: Formation[] = [
  {
    id: 1,
    title: "1. Initiation à l'IA pour les Entreprises",
    points: [
      "Audit complet en intelligence artificielle inclus",
      "Programmes sur mesure, adaptés à votre domaine d'activité",
      "Découverte des outils IA essentiels (ChatGPT, Claude, Perplexity, etc.)",
      "Mise en pratique immédiate avec des exemples concrets et applicables dès le départ",
    ],
    image: "https://picsum.photos/seed/formation1/400/300",
  },
  {
    id: 2,
    title: "2. IA pour les Organisations",
    points: [
      "Audit IA intégré",
      "Concentration sur les outils d'aide à la décision et de gestion",
      "Élaboration et mise en œuvre d'une stratégie IA sur mesure",
      "Accompagnement personnalisé pour évaluer les résultats tangibles",
    ],
    image: "https://picsum.photos/seed/formation2/400/300",
  },
  {
    id: 3,
    title: "3. IA pour les Équipes Commerciales",
    points: [
      "Automatisez la recherche de prospects grâce à l'IA",
      "Améliorez la qualification des leads",
      "Boostez la performance de vos équipes commerciales",
      "Prenez des décisions éclairées grâce à des données précises",
    ],
    image: "https://picsum.photos/seed/formation3/400/300",
  },
  {
    id: 4,
    title: "4. IA Appliquée au Marketing",
    points: [
      "Générez du contenu marketing avec l'intelligence artificielle",
      "Optimisez vos campagnes publicitaires",
      "Analysez et exploitez vos données de manière plus efficace",
      "Personnalisez l'expérience client pour maximiser l'engagement",
    ],
    image: "https://picsum.photos/seed/formation4/400/300",
  },
  {
    id: 5,
    title: "5. IA pour les Ressources Humaines",
    points: [
      "Simplifiez le recrutement grâce à l'IA",
      "Automatisez les tâches administratives récurrentes",
      "Renforcez la fidélisation des talents",
      "Libérez du temps pour des initiatives stratégiques",
    ],
    image: "https://picsum.photos/seed/formation5/400/300",
  },
  {
    id: 6,
    title: "6. Découverte de l'Intelligence Artificielle",
    points: [
      "Exploration des fondamentaux de l'IA",
      "Formation adaptée à votre secteur d'activité",
      "Maîtrise des outils d'IA générative",
      "Mise en pratique avec des cas concrets dès le premier jour",
    ],
    image: "https://picsum.photos/seed/formation6/400/300",
  },
];

export const FormationPage = () => {
  return (

    <div className={styles.grid}>
    {formations.map((formation) => (
      <div key={formation.id} className={styles.card}>
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
              className={`${styles.button} ${styles.btnAppointment}`}
            >
              Voir la Formation
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};