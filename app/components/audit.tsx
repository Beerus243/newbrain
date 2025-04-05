import { IconType } from "react-icons";
import { FaUserFriends } from "react-icons/fa";
import styles from "../Card/Card.module.css";
export interface AuditCard {
  icon: IconType;
  title: string;
  points: string[];
}

const Audit = () => {
  const auditServices: AuditCard[] = [
    {
      icon: FaUserFriends,
      title: "Réalisation de l'audit",
      points: [
        "Recueillir les informations détaillées sur les modes opératoires, les outilsutilisés et la culture d'entreprise.",
        "Définition des priorités et choix des cas d'usages à prioriser.",
      ],
    },
    {
      icon: FaUserFriends,
      title: "Identification des inefficacités opérationnelles",
      points: ["Utilisation de matrices d'évaluation et scoring des données."],
    },
    {
      icon: FaUserFriends,
      title: "Réalisation de l'audit 2",
      points: [
        "Recueillir les informations détaillées sur les modes opératoires, les outilsutilisés et la culture d'entreprise.",
        "Définition des priorités et choix des cas d'usages à prioriser.",
      ],
    },
    {
      icon: FaUserFriends,
      title: "Réalisation de l'audit 3",
      points: [
        "Recueillir les informations détaillées sur les modes opératoires, les outilsutilisés et la culture d'entreprise.",
        "Définition des priorités et choix des cas d'usages à prioriser.",
      ],
    },
  ];
  return (
    <div className="w-full flex items-center flex-col !p-5">
      <h3
        className={
          "font-sans text-center justify-center items-center !text-2xl !font-bold text-gray-100"
        }
      >
        Audit de Maturité IA
      </h3>
      <p className={"text-center font-sans text-gray-100"}>
        Une approche personnalisée pour favoriser la collaboration et
        l’innovation
      </p>
      {/* Conteneur responsive */}
      <div className="max-w-5xl text-white grid grid-cols-2 gap-5 !w-full !mx-5 !p-5 overflow-x-auto max-md:flex max-md:flex-nowrap max-md:gap-5">
        {auditServices.map((field, index) => {
          return (
            <div
              key={`${field.title}-${field.icon}-${index}`}
              className={`${styles.card} 
                relative bg-[#2a2a2a] rounded-lg !p-9 h-auto w-full text-center shadow-lg max-md:!min-w-[300px]`}
            >
              <field.icon size={30} className={"text-orange-600"} />
              <h3
                className={"text-left !text-xl !font-bold text-gray-50 !mb-5"}
              >
                {field.title}
              </h3>
              <ul className={"list-none flex flex-col gap-3"}>
                {field.points.map((puce) => (
                  <li key={puce} className="text-md text-start">
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

export default Audit;
