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

export default function Body() {
  return (
    <>
      <div className={styles.headerText}>
        <h6 className={styles.titre1}>
          FORMATION IA POUR PROFESSIONNELS & PARTICULIERS
        </h6>
        <h1 className={styles.titre2}>
          Pro ou Enrepeneur
          <br />
          <span className={styles.highlight}>
            Libérez votre potentiel avec l'IA{" "}
          </span>
        </h1>
        <p className={styles.paragraphe1}>
          Équipez vos équipes avec les compétences nécessaires et intégrez les
          solutions d'intelligence artificielle les plus pertinentes pour
          optimiser vos processus. Concentrez-vous sur les activités qui
          génèrent le plus d'impact.
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
        <p className={styles.titre3}>
          Ils ont bénéficié de l'expertise et de l'accompagnement de nos
          formateurs spécialisés.
        </p>
      </div>

      <div className={styles.container1}>
        <h2 className={styles.title}>
          Nos programmes de formation en intelligence artificielle{" "}
        </h2>
        <div className={styles.titre3}>
          <p className={styles.paragraphe}>
            De nombreux parcours de formation en IA sont disponibles pour
            accompagner les entreprises face aux défis actuels.
          </p>
        </div>

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
      </div>

      {/* Reste du composant Body (statistiques, Newbrain, etc.) */}
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
            <h3 className={styles.title}>Audit de Maturité IA</h3>
            <p className={styles.paragraphe}>
              Une approche personnalisée pour favoriser la collaboration et
              l’innovation
            </p>
          </div>

          {/* Grille de cards pour l'Audit */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>
                Evaluation du degré de maturité en IA
              </h3>
              <ul className={styles.cardList}>
                <li>
                  Mise en place d'un questionnaire en ligne pour évaluer la
                  maturité, la vision et les attentes des collaborateurs en
                  matière d'IA.
                </li>
                <li>
                  Définition des priorités et choix des cas d'usages à
                  prioriser.
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>
                Identification des inefficacités opérationnelles
              </h3>
              <ul className={styles.cardList}>
                <li>
                  Utilisation de matrices d'évaluation et scoring des données.
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>Réalisation de l'audit</h3>
              <ul className={styles.cardList}>
                <li>
                  {" "}
                  Recueillir les informations détaillées sur les modes
                  opératoires, les outilsutilisés et la culture d'entreprise.
                </li>
              </ul>
              <ul className={styles.cardList}>
                <li>
                  Définition des priorités et choix des cas d'usages à
                  prioriser.
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>
                Création de la road map de formation
              </h3>
              <p className={styles.cardGridDescription}>
                <ul className={styles.cardList}>
                  <li>
                    Rapport d'audit: Synthèse des données collectées, analyses
                    effectuées et conclusions tirées.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <br />

          {/* Card dédiée à la Formation */}
          <div className={styles.auditCard}>
            <h3 className={styles.title}>Formation</h3>
            <p className={styles.paragraphe}>
              Acculturation et formation de vos équipes aux outils IA métiers
            </p>
          </div>
          <br />

          {/* Grille de cards pour la Formation */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>
                Planification de la formation
              </h3>
              <p className={styles.cardGridDescription}>
                <ul className={styles.cardList}>
                  <li>Séances de formation en présentiel ou à distance.</li>
                </ul>
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
                Déploiement d'un support de formation avec les rédoffusions des
                sessions.
              </p>
              <p className={styles.cardGridDescription}>
                <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
                Contenue adapté aux besoins spécifiques de l'entreprise.
                <br />
                Acculturation à l'IA (histoire, principaux usages, outils, biais
                éthique...)
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
                Atéliers pratiques sur l'Utilisation des outils IA les plus
                adaptés à votre activité.
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
                Atéliers pratiques sur l'Utilisation des outils IA les plus
                adaptés à votre activité.
              </p>
            </div>
          </div>
          <br />
          <div className={styles.cardLarge}>
            <h3 className={styles.cardLargeTitre}>
              {" "}
              Récommandation post-formation
            </h3>
            <p className={styles.cardLargeDescription}>
              <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
              Livrable de la fin de la formation rédigé par nos consultants.
              <br />
              Proposition de la road map d'Implémentation des outils IA.
            </p>
          </div>

          <br />
          <div className={styles.auditCard}>
            <h3 className={styles.title}>Implémentation </h3>
            <p className={styles.paragraphe}>
              Une approche personnalisée pour favoriser la collaboration et
              l'innovation
            </p>
          </div>
          <br />
          {/* Grille de cards pour la Formation */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaCalendarAlt className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>
                Planification de l'Implémentation
              </h3>
              <p className={styles.cardGridDescription}>
                <SiNike style={{ color: "green", marginRight: "8px" }} />
                Plan d'action avec un plan stratégiques pour l'adoption de l'IA,
                incluant les priorités, les ressources nécessaires et les
                échéances.
              </p>
              <p className={styles.cardGridDescription}>
                <SiNike style={{ color: "green", marginRight: "8px" }} />
                Contenu adapté aux besoins spécifiques de l'entreprise.
              </p>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>
                Deploiement des outils IA & <br /> autonomisations
              </h3>
              <p className={styles.cardGridDescription}>
                <SiNike style={{ color: "green", marginRight: "8px" }} />
                Déploiement d'un support de formation avec les rédoffusions des
                sessions.
              </p>
              <p className={styles.cardGridDescription}>
                <SiNike style={{ color: "green", marginRight: "8px" }} />
                Contenue adapté aux besoins spécifiques de l'entreprise.
                <br />
                Acculturation à l'IA (histoire, principaux usages, outils, biais
                éthique...)
              </p>
            </div>
          </div>
          <br />

          {/* Grille de cards pour la Formation */}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <FaSink className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>
                Suivi continu du Déploiement
              </h3>
              <p className={styles.cardGridDescription}>
                <SiNike style={{ color: "green", marginRight: "8px" }} />
                Séances de formation en présentiel ou à distance.
              </p>
              <p className={styles.cardGridDescription}>
                <SiNike style={{ color: "green", marginRight: "8px" }} />
                Contenu adapté aux besoins spécifiques de l'entreprise.
              </p>
            </div>
            <div className={styles.card}>
              <FaUserFriends className={styles.cardIcon} />
              <h3 className={styles.cardGridTitle}>
                {" "}
                Plateforme pour la gestion <br />
              </h3>
              <p className={styles.cardGridDescription}>
                <SiNike style={{ color: "green", marginRight: "8px" }} />
                Déploiement d'un support de formation avec les rédoffusions des
                sessions.
              </p>
              <p className={styles.cardGridDescription}>
                <SiNike style={{ color: "green", marginRight: "8px" }} />
                Contenue adapté aux besoins spécifiques de l'entreprise.
                <br />
                Acculturation à l'IA (histoire, principaux usages, outils, biais
                éthique...)
              </p>
            </div>
          </div>
          <br />
          <div className={styles.auditCard}>
            <h3 className={styles.title}>Suivis des resultats </h3>
            <p className={styles.paragraphe}>
              Un suivi rigoureux pour garantir la réussite du project
            </p>
          </div>
          <div className={styles.cardLarge}>
            <h3 className={styles.cardLargeTitre}>
              {" "}
              Optimisation et suivi continue
            </h3>
            <p className={styles.cardLargeDescription}>
              <SiNike style={{ color: "green", marginRight: "8px" }} />
              intégration des retours d'expérience.
            </p>
            <p className={styles.cardLargeDescription}>
              <SiNike style={{ color: "green", marginRight: "8px" }} />
              Suivi des indicateurs de performance post-implémentation.(KPI)
            </p>
            <p className={styles.cardLargeDescription}>
              <SiNike style={{ color: "green", marginRight: "8px" }} />
              Analyse des gains de temps et des réductions de couts.
            </p>
          </div>
        </section>
      </div>
      <br />
      <h3 className={styles.title}> Les Services IA NewBrain</h3>
      <br />
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <FaSink className={styles.cardIcon} />
          <h3 className={styles.cardGridTitle}>Formation IA</h3>
          <p className={styles.paragraphe}>
            Formation IA de vos collaborateurs aux{" "}
            <strong>Fondamentaux et techniques d'IA générative</strong>pour
            comprendre cette rupture technologique et ses applications
          </p>
          <ul className={styles.cardList}>
            <li>Contenu adapté aux besoins spécifiques de l'entreprise.</li>
          </ul>
          <p className={styles.cardGridDescription}>
            <SiNike style={{ color: "green", marginRight: "8px" }} />
            Contenu adapté aux besoins spécifiques de l'entreprise.
          </p>
          <ul className={styles.cardList}>
            <li>Implémentatez les outils IA les plus Adaptés à vos process</li>
          </ul>
          <ul className={styles.cardList}>
            Maitrisez les Fondamentaux du Prompt Engineering
          </ul>
          <ul className={styles.cardList}>
            <li>Formation en présentiel ou a distance</li>
          </ul>
        </div>
        <div className={styles.card}>
          <FaSink className={styles.cardIcon} />
          <h3 className={styles.cardGridTitle}>Audit & Consulting</h3>
          <p className={styles.paragraphe}>
            Identifiez les opportinités d'innovation et de croissance grace à
            notre audit IA, spécialement concu pour aligner votre technologie
            avec vos ambitions stratégiques
          </p>

          <ul className={styles.cardList}>
            <li> Question de préparation. </li>
          </ul>

          <ul className={styles.cardList}>
            <li>Tour d'Horizon des outils existants</li>
          </ul>
          <ul className={styles.cardList}>
            <li>Entretien avec vos collaorateurs par type de métier</li>
          </ul>
          <ul className={styles.cardList}>
            <li>Réalisation d'un rapport de récommendations générales</li>
          </ul>
        </div>
      </div>
      <br />
      <h3 className={styles.title}> Pourquoi choisir NewBrain</h3>
      <br />
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <FaSink className={styles.cardIcon} />
          <h3 className={styles.cardGridTitle}>Expertise de pointe</h3>
          <p className={styles.paragraphe}>
            Nos Formateurs et consultant maitrisent les outils IA adaptés à
            votre secteur et vous guident avec précsion
            <br /> Ces exxperts sélectionnent les outils d'IA les plus
            performants pour optimiser le gain de Productivité.
          </p>
        </div>
        <div className={styles.card}>
          <FaSink className={styles.cardIcon} />
          <h3 className={styles.cardGridTitle}>Une approche sur-mesure</h3>
          <p className={styles.paragraphe}>
            Nos Consultants analysent vos méthodes de travail pendant l'audit.
            <br />
            <br />
            Développement d'un parcours personnalisé suite aux informations
            Recueillis en interne.
            <br />
            <br />
            Automatisation et assistants IA Développés pour vous.
          </p>
        </div>
        <div className={styles.card}>
          <FaSink className={styles.cardIcon} />
          <h3 className={styles.cardGridTitle}>Roi mesurable</h3>
          <p className={styles.paragraphe}>
            Avec Newbrain, vous bénéficiez de résultats concrets.
            <br />
            <br />
            Nos formations et soltions permettent de réduire vos couts
            opérationnels, d'augmenter la productivité et favoriser la montée en
            competences de vos équipes.
          </p>
        </div>
      </div>

      <h3 className={styles.title}>
        {" "}
        Certifications et financement par vos OPCOs.{" "}
      </h3>
      <p className={styles.paragraphe}>
        {" "}
        Newbrain est certifier Qualiopi et propose des solutions de financement
        pour vos formations
      </p>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <FaSink className={styles.cardIcon} />
          <h3 className={styles.cardGridTitle}>Pour les Entreprises</h3>
          <p className={styles.paragraphe}>
            Nos Formations sont éligibles au plans de déveppement des
            compétences. Vous pouvez donc béneficier des subventions par les
            Opco et FNE
          </p>
        </div>
        <div className={styles.card}>
          <FaSink className={styles.cardIcon} />
          <h3 className={styles.cardGridTitle}>Pour les particuliers </h3>
          <p className={styles.paragraphe}>
            Formations financiables à 100% grace aux aides à la formation et au
            CPF.
          </p>
        </div>
        <div className={styles.card}>
          <FaSink className={styles.cardIcon} />
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.btnAppointment}`}>
              Prenez rendez-vous
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
