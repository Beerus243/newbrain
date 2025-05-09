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
    <div className="flex flex-col !p-10 items-center gap-5 bg-gradient-to-r from-[#151f2b] via-[#402049] to-[#000000] ">
      {/* Titre aligné à gauche */}
      <div className="mb-8 p-5 text-start items-start text-gray-100 font-sans text-lg w-full max-w-5xl mx-auto">
        <h3 className="font-sans text-start pt-7 !text-4xl !font-bold text-white">
          Pourquoi choisir NewBrain
        </h3>
      </div>

      {/* Section Formations */}
      <div className="max-w-5xl text-white grid w-full grid-cols-3 !gap-9 overflow-x-auto overflow-y-hidden max-md:flex max-md:flex-nowrap max-md:gap-5">
        {formations.map((field) => {
          return (
            <div
              key={field.title}
              className={`relative bg-white text-black rounded-lg !p-9 h-auto w-full text-start !shadow-lg ${field.className} ${styles.card} max-md:!min-w-[350px]`}
            >
              {field.imageUrl && (
                <img
                  src={field.imageUrl}
                  alt={field.title}
                  className="!w-90 !h-50 object-cover !mb-9 !rounded-t-lg"
                />
              )}
              <h3 className="text-center !text-xl !font-bold text-black !mb-5">
                {field.title}
              </h3>
              <ul className="list-none flex flex-col gap-3">
                {field.points.map((puce, i) => (
                  <li key={i} className="flex items-center gap-3 text-black">
                    {puce}
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
