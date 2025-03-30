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
      title: "Expertise reconnue",
      points: [
        "Nos formateurs et consultants sont des spécialistes des outils IA, adaptés à votre secteur d'activité.",
        "Ils identifient et mettent en œuvre les solutions les plus performantes pour maximiser votre efficacité.",
      ],
    },
    {
      icon: FaUserFriends,
      title: "Une méthode personnalisée",
      points: [
        "Pendant l'audit, nos experts analysent vos processus et vos besoins spécifiques.",
        "Nous concevons un parcours sur mesure, basé sur les informations recueillies en interne.",
        "Développement d'automatisations et d'assistants IA conçus spécialement pour vous.",
      ],
    },
    {
      icon: FaUserFriends,
      title: "Un retour sur investissement tangible",
      points: [
        "Nos formations et solutions vous offrent des résultats mesurables.",
        "Réduction des coûts opérationnels, augmentation de la productivité et renforcement des compétences de vos équipes.",
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
          Pourquoi choisir NewBrain{" "}
        </h3>
        <div
          className={
            "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base !mt-2"
          }
        >
          Nous vous accompagnons dans la maîtrise de l'IA et boostons la
          productivité de votre entreprise.
          <br />
          <span className={"text-lg font-bold !mb-7"}>
            {" "}
            Notre approche repose sur trois piliers fondamentaux :
          </span>
        </div>
      </div>
      <div className={`max-w-5xl text-white grid grid-cols-3 gap-5 !p-5`}>
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
