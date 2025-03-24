// FormationData.tsx

export type DataFormation = {
  [x: string]: any;
  id: number;
  title: string;
  presentation: string;
  image: string;
  prerequisites: string;
  evaluationModalities: string;
  targetAudience: string;
  objectives: string;
  content: string;
  gain: string;
};

export const detailFormation: DataFormation[] = [
  {
    id: 1,
    title: "Initiation à l'IA pour les Entreprises",
    presentation:
      "Découvrez les bases de l'intelligence artificielle et ses applications en entreprise.",
    image: "/images/formation1.jpg",
    prerequisites: "Aucune connaissance préalable requise.",
    evaluationModalities: "QCM et études de cas.",
    targetAudience: "Entrepreneurs et managers.",
    objectives:
      "Comprendre les fondamentaux de l'IA et ses enjeux stratégiques.",
    content: "Histoire de l'IA, concepts de base, exemples d'application.",
    gain: "Acquérir une vision stratégique pour booster la productivité.",
  },
  {
    id: 2,
    title: "IA pour les Organisations",
    presentation:
      "Une formation dédiée à l'intégration de l'IA dans la gestion d'entreprise.",
    image: "/images/formation2.jpg",
    prerequisites: "Connaissances de base en informatique.",
    evaluationModalities: "Projets pratiques et simulations.",
    targetAudience: "Dirigeants et cadres.",
    objectives: "Développer une stratégie IA adaptée à l'organisation.",
    content: "Audit IA, outils de gestion, études de cas réels.",
    gain: "Optimisation des processus et prise de décision améliorée.",
  },
  {
    id: 3,
    title: "IA pour les Équipes Commerciales",
    presentation: "Boostez vos équipes commerciales grâce à l'IA.",
    image: "/images/formation3.jpg",
    prerequisites: "Notions de marketing et vente.",
    evaluationModalities: "Ateliers et exercices pratiques.",
    targetAudience: "Commerciaux et responsables marketing.",
    objectives: "Automatiser et optimiser la prospection.",
    content: "Outils d'IA, CRM intelligent, analyse de données.",
    gain: "Augmentation des taux de conversion et efficacité commerciale.",
  },
  {
    id: 4,
    title: "IA Appliquée au Marketing",
    presentation:
      "Exploitez l'IA pour créer des campagnes marketing innovantes.",
    image: "/images/formation4.jpg",
    prerequisites: "Connaissances de base en marketing digital.",
    evaluationModalities: "Études de cas et travaux pratiques.",
    targetAudience: "Marketers et publicitaires.",
    objectives: "Personnaliser l'expérience client grâce à l'IA.",
    content: "Automatisation, personnalisation, optimisation des campagnes.",
    gain: "Meilleur engagement client et retour sur investissement marketing amélioré.",
  },
  {
    id: 5,
    title: "IA pour les Ressources Humaines",
    presentation:
      "Optimisez le recrutement et la gestion des talents avec l'IA.",
    image: "/images/formation5.jpg",
    prerequisites: "Connaissances de base en RH.",
    evaluationModalities: "Simulations et cas pratiques.",
    targetAudience: "Responsables RH et recruteurs.",
    objectives:
      "Automatiser le processus de recrutement et la gestion des compétences.",
    content: "Outils de recrutement automatisés, analyses prédictives.",
    gain: "Gain de temps et amélioration de la qualité des recrutements.",
  },
  {
    id: 6,
    title: "Découverte de l'Intelligence Artificielle",
    presentation: "Une immersion complète dans le monde de l'IA.",
    image: "/images/formation6.jpg",
    prerequisites: "Intérêt pour la technologie et la nouveauté.",
    evaluationModalities: "QCM, ateliers pratiques et débats.",
    targetAudience: "Tous publics, professionnels ou curieux.",
    objectives: "Comprendre les bases de l'IA et ses implications.",
    content: "Concepts, applications, enjeux éthiques et pratiques.",
    gain: "Acquérir des connaissances fondamentales pour aborder l'IA au quotidien.",
  },
];

export default detailFormation;
