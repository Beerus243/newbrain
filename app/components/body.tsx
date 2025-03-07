"use client";
import React from "react";
import styles from "./body.module.css";
import styles2 from "./responsive.module.css";
import { FaCalendarAlt, FaChartLine, FaCheckCircle, FaMoneyBillWave, FaUserFriends, FaUserGraduate } from "react-icons/fa";

type Formation = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const formations: Formation[] = [
  { id: 1, title: "Formation 1", description: "Description de la formation 1.", image: "https://picsum.photos/seed/formation1/400/300" },
  { id: 2, title: "Formation 2", description: "Description de la formation 2.", image: "https://picsum.photos/seed/formation2/400/300" },
  { id: 3, title: "Formation 3", description: "Description de la formation 3.", image: "https://picsum.photos/seed/formation3/400/300" },
  { id: 4, title: "Formation 4", description: "Description de la formation 4.", image: "https://picsum.photos/seed/formation4/400/300" },
  { id: 5, title: "Formation 5", description: "Description de la formation 5.", image: "https://picsum.photos/seed/formation5/400/300" },
  { id: 6, title: "Formation 6", description: "Description de la formation 6.", image: "https://picsum.photos/seed/formation6/400/300" },
];

export default function Body() {
  return (
    <>     
      <div className={styles.container1}>
        <h2 className={styles.title}>Nos offres et formations</h2>
        <div className={styles.titre3}>
          De nombreuses formations en intelligence artificielle existent pour répondre aux enjeux actuels des entreprises.
        </div>
        <div className={styles.grid}>
          {formations.map((formation) => (
            <div key={formation.id} className={styles.card}>
              <img src={formation.image} alt={formation.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{formation.title}</h3>
                <p className={styles.cardDescription}>{formation.description}</p>
                <button className={styles.cardButton}>Voir plus</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section combinée des statistiques et Newbrain avec id pour le seuil sticky */}
      <div id="statsContainer" className={styles.statsContainer}>
        <div className={styles.statsGrid}>
          <div className={styles.statsCard}>
            <FaChartLine className={styles.icon} />
            <div className={styles.statValue}>+27%</div>
            <div className={styles.statLabel}>de Productivité</div>
          </div>
          <div className={styles.statsCard}>
            <FaMoneyBillWave className={styles.icon} />
            <div className={styles.statValue}>+30%</div>
            <div className={styles.statLabel}>d'économie grâce à l'IA</div>
          </div>
          <div className={styles.statsCard}>
            <FaUserGraduate className={styles.icon} />
            <div className={styles.statValue}>+1000</div>
            <div className={styles.statLabel}>apprenants formés</div>
          </div>
        </div>

        <section className={styles.newbrainSection}>
          <h2 className={styles.newbrainTitle}>Newbrain</h2>
          <div className={styles.subtitles}>
            <span className={styles.subtitle}>Audit</span>
            <span className={styles.subtitle}>Formation</span>
            <span className={styles.subtitle}>Implémentation</span>
            <span className={styles.subtitle}>Suivi des résultats</span>
          </div>

          {/* Card dédiée à l'Audit */}
          <div className={styles.auditCard}>
            <h3>Audit</h3>
            <p>Une approche personnalisée pour favoriser la collaboration et l’innovation</p>
          </div>

          {/* Grille de cards (2 par 2) */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Evaluation du degré de maturité en IA</h3>
              <p className={styles.cardGridDescription}> <FaCheckCircle style={{color:'green', marginRight: '8px'}}/> Mise en place d'un questionnaire en ligne pour évaluer
                la maturité, la vision et les attentes des collaborateurs en matière d'IA.
              </p>
              <p className={styles.cardGridDescription}> Définition des priorités et choix des cas d'usages à prioriser .</p>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Identification des inefficacités opérationnelles </h3>
              <p className={styles.cardGridDescription}> Utilisation de matrices d'évaluation. Scoring des données.</p>
            </div>
          </div>
          <br />
          {/* Card dédiée à la Formation */}
          <div className={styles.auditCard}>
            <h3>Formation</h3>
            <p>Acculturation et formation de vos équipes aux outils IA métiers</p>
          </div>
          <br />

          {/* Grille de cards (2 par 2) */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Planification de la formation</h3>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Acculturation</h3>
            </div>
          </div>
            <br />
          {/* Card dédiée à l'Implémentation */}
          <div className={styles.auditCard}>
            <h3>Implémentation</h3>
            <p>Une approche personnalisée pour favoriser la collaboration et l’innovation</p>
          </div>

          {/* Grille de cards (2 par 2) */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Planification de la formation</h3>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Acculturation</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
