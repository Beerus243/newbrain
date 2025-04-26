import React from "react";

const values = [
  {
    title: "Excellence",
    description:
      "Nous visons l'excellence dans chaque formation, en nous assurant que nos apprenants acquièrent des compétences concrètes et applicables.",
    emoji: "🎯",
  },
  {
    title: "Collaboration",
    description:
      "Nous croyons en la force du collectif et travaillons mains dans la main avec nos clients pour atteindre leurs objectifs.",
    emoji: "🤝",
  },
  {
    title: "Innovation",
    description:
      "Nous restons à la pointe des dernières avancées en IA pour offrir des formations toujours plus pertinentes et efficaces.",
    emoji: "💡",
  },
  {
    title: "Impact",
    description:
      "Nous nous engageons à créer un impact positif en rendant l'IA accessible et compréhensible pour tous.",
    emoji: "🌍",
  },
];

export function Valeurs() {
  return (
    <div className=" bg-gray-200 w-full !p-12 text-white bottom-0 top-0">
      {/* Titre */}
      <h2 className="!text-2xl text-black !font-extrabold !text-start !mb-12">
        Nos Valeurs
      </h2>

      {/* Grille des valeurs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((value, index) => (
          <div
            key={index}
            className="relative bg-white hover:bg-[#402049] hover:text-white text-black !rounded-lg !p-8 h-auto w-full !text-center !shadow-lg border border-gray-300 transition-transform transform hover:scale-101"
          >
            {/* Emoji */}
            <div className="!text-3xl mb-5">{value.emoji}</div>
            {/* Contenu */}
            <h3 className="!text-xl !font-bold !mb-3">{value.title}</h3>
            <p className="text-md ">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Valeurs;
