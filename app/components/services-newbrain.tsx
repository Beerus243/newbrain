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
      title: "Evaluation du degré de maturité en IA",
      points: [
        "Mise en place d'un questionnaire en ligne pour évaluer la maturité, la vision et les attentes des collaborateurs en matière d'IA.",
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
      title: "Réalisation de l'audit",
      points: [
        " Recueillir les informations détaillées sur les modes opératoires, les outilsutilisés et la culture d'entreprise.",
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
    {
      icon: FaUserFriends,
      title: "Récommandation post-formation",
      points: [
        "Livrable de la fin de la formation rédigé par nos consultants. Proposition de la road map d'Implémentation des outils IA.",
      ],
      className: "col-span-full",
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
          Les Services Newbrain{" "}
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
