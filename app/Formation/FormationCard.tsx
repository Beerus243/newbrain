"use client";
import React from "react";
import { Formation } from "./Formation.Data";
import styles from "./Formation.module.css";

type FormationCardProps = {
  formation: Formation;
  index: number;
};

const FormationCard: React.FC<FormationCardProps> = ({ formation, index }) => {
  return (
    <div
      className={styles.formationCard}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={styles.formationTop}>
        <div className={styles.formationInfo}>
          <h2>{formation.title}</h2>
          <p>{formation.presentation}</p>
          <button className={styles.followButton}>Suivre la formation</button>
        </div>
        <div className={styles.formationImage}>
          <img src={formation.image} alt={formation.title} />
        </div>
      </div>
      <div className={styles.detailsGrid}>
        <div className={styles.detailCard}>
          <h3>Pré-requis</h3>
          <p>{formation.prerequisites}</p>
        </div>
        <div className={styles.detailCard}>
          <h3>Modalités d'évaluation</h3>
          <p>{formation.evaluationModalities}</p>
        </div>
        <div className={styles.detailCard}>
          <h3>Public cible</h3>
          <p>{formation.targetAudience}</p>
        </div>
        <div className={styles.detailCard}>
          <h3>Objectifs</h3>
          <p>{formation.objectives}</p>
        </div>
        <div className={styles.detailCard}>
          <h3>Contenu</h3>
          <p>{formation.content}</p>
        </div>
        <div className={styles.detailCard}>
          <h3>Gain</h3>
          <p>{formation.gain}</p>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
