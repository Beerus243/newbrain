// app/Formation/Data.tsx

export type DataFormation = {
  id: number;
  title: string;
  presentation: string;
  themes: string[]; // Ajout des thèmes
  finalText: string; // Ajout du texte final
};

export const detailFormation: DataFormation[] = [
  {
    id: 1,
    title: "🧠 Acculturation à l’IA",
    presentation:
      "Initiez vos équipes aux fondamentaux de l'IA à travers une approche accessible, concrète et inspirante.",
    themes: [
      "✔️ Comprendre les bases de l’IA : concepts clés, opportunités, limites",
      "🚀 Découvrir des cas d’usage concrets selon votre secteur",
      "❌ Dissiper les idées reçues, clarifier les enjeux",
      "💬 S’inspirer de retours d’expérience pour lancer une dynamique d’innovation",
    ],
    finalText:
      "Créez un socle de compréhension commun pour accélérer l’adoption de l’IA dans vos projets.",
  },
  {
    id: 2,
    title: "🎯 Formation & Coaching",
    presentation:
      "Donnez à vos équipes les clés pour utiliser l’IA de manière autonome, efficace et pertinente.",
    themes: [
      "🛠️ Prise en main des outils IA : ChatGPT, Perplexity, Gemini…",
      "📚 Cas pratiques adaptés à vos métiers et problématiques",
      "💡 Coaching individualisé et montée en compétences",
      "📈 Gains de productivité mesurables dès la fin de la formation",
    ],
    finalText: "Apprenez à maîtriser l'IA pour booster vos performances.",
  },
  {
    id: 3,
    title: "🚀 Programme de transformation IA",
    presentation:
      "Accompagnez votre entreprise dans une transition durable vers l’intelligence artificielle.",
    themes: [
      "📊 Audit de maturité IA : analyse de vos processus, outils actuels et potentiel de gains",
      "🧩 Définition d’une feuille de route IA adaptée à vos objectifs métiers",
      "⚙️ Intégration progressive d’outils IA dans vos flux de travail existants",
      "🧠 Acculturation des équipes & accompagnement au changement",
      "📈 Suivi de la performance et ajustements continus des solutions IA mises en place",
    ],
    finalText:
      "Ce programme sur-mesure s’adresse aux dirigeants, managers et équipes opérationnelles souhaitant placer l’IA au cœur de leur stratégie d’innovation.",
  },
];

export default detailFormation;
