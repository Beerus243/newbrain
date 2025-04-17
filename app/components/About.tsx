import { FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import styles from "../Card/Card.module.css";

export interface About {
  title: string;
  points: string[];
  className?: string;
  imageUrl?: string; // Propriété optionnelle pour l'image
}

export const formations: About[] = [
  {
    title: "Expertise reconnue",
    points: [
      "Nos formateurs et consultants sont des spécialistes des outils IA, adaptés à votre secteur d'activité.",
      "Ils identifient et mettent en œuvre les solutions les plus performantes pour maximiser votre efficacité.",
    ],
    imageUrl: "/image/robot1.jpg", // Assurez-vous que le fichier se trouve dans public/images/robot1.jpg
  },
  {
    title: "Une méthode personnalisée",
    points: [
      "Pendant l'audit, nos experts analysent vos processus et vos besoins spécifiques.",
      "Nous concevons un parcours sur mesure, basé sur les informations recueillies en interne.",
      "Développement d'automatisations et d'assistants IA conçus spécialement pour vous.",
    ],
    imageUrl: "/image/robot2.jpg", // Assurez-vous que le fichier se trouve dans public/images/robot2.jpg
  },
  {
    title: "Un retour sur investissement tangible",
    points: [
      "Nos formations et solutions vous offrent des résultats mesurables.",
      "Réduction des coûts opérationnels, augmentation de la productivité et renforcement des compétences de vos équipes.",
    ],
    imageUrl: "/image/services.jpg", // Assurez-vous que le fichier se trouve dans public/images/services.jpg
  },
];

const AboutComponent = () => {
  return (
    <div className="flex flex-col items-center gap-5 bg-gradient-to-r from-[#004AAD] to-[#CB6CE6] pb-20">
      <div className={"mb-b p-5 text-center text-gray-100 font-sans text-lg"}>
        <h3
          className={
            "font-sans !text-left pt-7 !text-3xl !font-bold text-gray-100 grid"
          }
        >
          Pourquoi choisir NewBrain{" "}
        </h3>
        <div
          className={
            "text-left font-sans text-gray-100 leading-6 pb-5 pt-7 text-base !mt-2"
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
      <div className="max-w-5xl text-white grid w-full grid-cols-3 gap-5 !p-5 overflow-x-auto max-md:flex max-md:flex-nowrap max-md:gap-5">
        {formations.map((field) => {
          return (
            <div
              key={field.title}
              className={`relative bg-[#2a2a2a] rounded-lg !p-9 h-auto w-full text-center shadow-lg ${field.className} ${styles.card} max-md:!min-w-[350px]`}
            >
              {field.imageUrl && (
                <img
                  src={field.imageUrl}
                  alt={field.title}
                  className="!w-100 !h-60 object-cover !mb-9 !rounded-t-lg !border-4 !border-orange-500"
                />
              )}
              <h3 className="text-left !text-xl !font-bold text-gray-50 !mb-5">
                {field.title}
              </h3>
              <ul className="list-none flex flex-col gap-3">
                {field.points.map((puce, i) => (
                  <li key={i} className="text-md text-start">
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

export default AboutComponent;
