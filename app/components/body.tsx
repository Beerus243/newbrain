"use client";
import React, { useState, useEffect } from "react";
import styles from "./body.module.css";
import {
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaMoneyBillWave,
  FaUserFriends,
  FaUserGraduate
} from "react-icons/fa";
import { start } from "repl";

type Formation = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const formations: Formation[] = [
  { id: 1, title: "Formation 1", description: "inscrivez vous rapidement.", image: "https://picsum.photos/seed/formation1/400/300" },
  { id: 2, title: "Formation 2", description: "Description de la formation 2.", image: "https://picsum.photos/seed/formation2/400/300" },
  { id: 3, title: "Formation 3", description: "Description de la formation 3.", image: "https://picsum.photos/seed/formation3/400/300" },
  { id: 4, title: "Formation 4", description: "Description de la formation 4.", image: "https://picsum.photos/seed/formation4/400/300" },
  { id: 5, title: "Formation 5", description: "Description de la formation 5.", image: "https://picsum.photos/seed/formation5/400/300" },
  { id: 6, title: "Formation 6", description: "Description de la formation 6.", image: "https://picsum.photos/seed/formation6/400/300" }
];

export default function Body() {
  return (
    <>
      <div className={styles.container1}>
        <h2 className={styles.title}>Nos offres et formations</h2>
        <div className={styles.titre3}>
          <p className={styles.paragraphe}>
            De nombreuses formations en intelligence artificielle existent 
            pour répondre aux enjeux actuels des entreprises.</p>
        </div>

        <div className={styles.grid}>
          {formations.map((formation) => (
            <div key={formation.id} className={styles.card}>
              <img src={formation.image} alt={formation.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{formation.title}</h3>
                <p className={styles.cardDescription}>{formation.description}</p>
                <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.btnAppointment}`}>
          Voir la Formation
        </button>
      </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* La suite de votre composant Body (statistiques, Newbrain, etc.) */}
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
            <h3>Audit de Maturité IA</h3>
            <p>Une approche personnalisée pour favoriser la collaboration et l’innovation</p>
          </div>

          {/* Grille de cards pour l'Audit */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Evaluation du degré de maturité en IA</h3>
              <p className={styles.cardGridDescription}>
                <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
                Mise en place d'un questionnaire en ligne pour évaluer la maturité, la vision et les attentes des collaborateurs en matière d'IA.
              </p>
              <p className={styles.cardGridDescription}>
                <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
                Définition des priorités et choix des cas d'usages à prioriser.
              </p>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Identification des inefficacités opérationnelles</h3>
              <p className={styles.cardGridDescription}>
                <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
                Utilisation de matrices d'évaluation et scoring des données.
              </p>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Réalisation de l'audit</h3>
              <p className={styles.cardGridDescription}>
                <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
                Recueillir les informations détaillées sur les modes opératoires, les outilsutilisés et la culture d'entreprise.
              </p>
              <p className={styles.cardGridDescription}>
                <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
                Définition des priorités et choix des cas d'usages à prioriser.
                </p>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Création de la road map de formation</h3>
              <p className={styles.cardGridDescription}>
                <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
                Rapport d'audit: Synthèse des données collectées, analyses effectuées et conclusions tirées.
              </p>
            </div>
          </div>
          <br />

          {/* Card dédiée à la Formation */}
          <div className={styles.auditCard}>
            <h3>Formation</h3>
            <p>Acculturation et formation de vos équipes aux outils IA métiers</p>
          </div>
          <br />

          {/* Grille de cards pour la Formation */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Planification de la formation</h3>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Séances de formation en présentiel ou à distance.   
              </p>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Contenu adapté aux besoins spécifiques de l'entreprise.
              </p>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Acculturation - Jour 1</h3>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Déploiement d'un support de formation avec les rédoffusions des sessions.
              </p>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Contenue adapté aux besoins spécifiques de l'entreprise.<br />
              Acculturation à l'IA (histoire, principaux usages, outils, biais éthique...)
              </p>
            </div>
          </div>
          
          <br />
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Cas pratiques - Jour2</h3>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Démonstration de cas réels en entreprise.   
              </p>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Atéliers pratiques sur l'Utilisation des outils IA les plus adaptés à votre activité.
              </p>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}> Cas pratiques - Jour 2</h3>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Démonstration de cas réels en entreprise.
              </p>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Atéliers pratiques sur l'Utilisation des outils IA les plus adaptés à votre activité. 
              </p>
            </div>
          </div>
          <br/>
          <div className={styles.cardLarge}>
            <h3 className={styles.cardLargeTitre}> Récommandation post-formation</h3>
            <p className={styles.cardLargeDescription}>
            <FaCheckCircle style={{ color: "green", marginRight: "8px"}} />
            Livrable de la fin de la formation rédigé par nos consultants.<br />
            Proposition de la road map d'Implémentation des outils IA.
            </p>
          </div>

          <br />
          <div className={styles.auditCard}>
            <h3>Implémentation </h3>
            <p>Une approche personnalisée pour favoriser la collaboration et l'innovation</p>
          </div>
          <br />
          {/* Grille de cards pour la Formation */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Planification de l'Implémentation</h3>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
             Plan d'action avec un plan stratégiques pour l'adoption de l'IA, incluant les priorités, les ressources nécessaires et les échéances.  
              </p>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Contenu adapté aux besoins spécifiques de l'entreprise.
              </p>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Deploiement des outils IA & <br /> autonomisations</h3>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Déploiement d'un support de formation avec les rédoffusions des sessions.
              </p>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Contenue adapté aux besoins spécifiques de l'entreprise.<br />
              Acculturation à l'IA (histoire, principaux usages, outils, biais éthique...)
              </p>
            </div>
          </div>
          <br />

                    {/* Grille de cards pour la Formation */}
                    <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Suivi continu du <br /> Déploiement</h3>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Séances de formation en présentiel ou à distance.   
              </p>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Contenu adapté aux besoins spécifiques de l'entreprise.
              </p>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}> Plateforme pour la gestion <br /></h3>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Déploiement d'un support de formation avec les rédoffusions des sessions.
              </p>
              <p className={styles.cardGridDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Contenue adapté aux besoins spécifiques de l'entreprise.<br />
              Acculturation à l'IA (histoire, principaux usages, outils, biais éthique...)
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}