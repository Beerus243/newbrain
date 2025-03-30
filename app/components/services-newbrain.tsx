import { IconType } from "react-icons";
import { FaCalendarAlt, FaUserFriends } from "react-icons/fa";

export interface AuditCard {
  icon: IconType;
  title: string;
  points: string[];
  className?: string;
}

const Services = () => {
  const auditServices: AuditCard[] = [
    {
      icon: FaCalendarAlt,
      title: "Formation IA",
      points: [
        "Mise en place d'un questionnaire en ligne pour évaluer la maturité, la vision et les attentes des collaborateurs en matière d'IA.",
        "Définition des priorités et choix des cas d'usages à prioriser.",
        "Montez en compétences sur les fondamentaux et les techniques de l'IA générative",
        "	Formations adaptées pour vos collaborateurs ou particuliers, afin de comprendre cette révolution technologique et ses applications concrètes.",
        "Intégrez les outils IA les plus pertinents pour optimiser vos processus.",
        "Acquérez les bases essentielles du Prompt Engineering pour maximiser l'efficacité des outils IA.",
        "Sessions disponibles en présentiel ou à distance, selon vos préférences.",
      ],
    },
    {
      icon: FaUserFriends,
      title: "Audit et Conseil en IA",
      points: [
        "Utilisation de matrices d'évaluation et scoring des données.",
        "Découvrez des opportunités d'innovation et de croissance grâce à notre expertise",
        "Un audit sur mesure pour aligner votre stratégie technologique avec vos objectifs business.",
        "Questionnaire préparatoire pour cerner vos besoins.",
        "Revue complète des outils IA disponibles sur le marché.",
        "Entretiens approfondis avec vos équipes, par métier, pour identifier les axes d'amélioration.",
        "Remise d'un rapport détaillé avec des recommandations stratégiques.",
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center gap-5">
      <div className={"mb-b p-5 text-center text-gray-100 font-sans text-lg"}>
        <h3
          className={
            "font-sans text-center justify-center  items-center pt-7 !text-2xl !font-bold text-gray-100 grid"
          }
        >
          Les Services NewBrain{" "}
        </h3>
        <div
          className={
            "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
          }
        >
          Une approche personnalisée pour favoriser la collaboration et
          l'innovation
        </div>
      </div>
      <div className={`max-w-5xl text-white grid grid-cols-2 gap-5 !p-5`}>
        {auditServices.map((field) => {
          return (
            <div
              className={`bg-[#2a2a2a] rounded-lg !p-9 h-auto w-full text-center shadow-lg ${field.className}`}
            >
              <field.icon size={30} className={" text-orange-600"} />
              <h3
                className={"text-left !text-xl !font-bold text-gray-50 !mb-5"}
              >
                {field.title}
              </h3>
              <ul className={"list-none flex flex-col gap-3"}>
                {field.points.map((puce) => (
                  <li key={puce} className="text-md text-start ">
                    {"✅"} {puce}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
