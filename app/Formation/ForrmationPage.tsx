"use client";
import React from "react";
import { formations } from "./Formation.Data";
import FormationCard from "./FormationCard";
import styles from "./Formation.module.css";

const FormationPage: React.FC = () => {
  return (
    <main className={styles.formationSection}>
      {formations.map((formation, index) => (
        <FormationCard key={formation.id} formation={formation} index={index} />
      ))}
    </main>
  );
};

export default FormationPage;
