import React from "react";
import Header from "../components/Header";

const data = [
  {
    title: "Nos Succès Stories",
    description:
      "Découvrez comment nous avons transformé les entreprises grâce à l'IA. Nos clients ont vu une augmentation de leur productivité et une réduction de leurs coûts.",
    imageUrl: "/image/cover1.jpeg",
  },
  {
    title: "Notre Mission",
    description:
      "Accompagner les entreprises et les particuliers dans la maîtrise de l'IA pour maximiser leur potentiel et leur impact.",
    imageUrl: "/image/cover1.jpeg",
  },
  {
    title: "Objectifs Clés",
    description:
      "Former 1 000+ professionnels, automatiser les processus critiques et générer un impact mesurable dans chaque projet.",
    imageUrl: "/image/cover4.jpg",
  },
];

const values = [
  {
    title: "Excellence",
    description: "Nous visons l'excellence dans tout ce que nous faisons.",
    emoji: "🌟",
  },
  {
    title: "Collaboration",
    description: "Nous croyons en la force du travail d'équipe.",
    emoji: "🤝",
  },
  {
    title: "Innovation",
    description: "Nous innovons pour rester à la pointe de la technologie.",
    emoji: "💡",
  },
  {
    title: "Impact",
    description: "Nous cherchons à avoir un impact positif et durable.",
    emoji: "🌍",
  },
];

const ClientComponent = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto !pt-30">
        {/* Section principale */}
        <h2 className="text-center text-3xl font-bold text-gray-100 mb-10">
          Découvrez Nos Succès Stories et Nos Valeurs
        </h2>
        <div className="flex flex-col !gap-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative !border-2 !border-amber-50 text-white !h-100 max-md:h-[10rem]  flex items-center justify-center"
            >
              {/* Image en fond en cover avec largeur à 90% */}
              <div className="absolute inset-0 !h-auto flex justify-center items-center">
                <img src={item.imageUrl} alt={item.title} className="w-[90%]" />
              </div>
              {/* Texte affiché dans une boîte semi-opaque pour camoufler l'overlay */}
              <div className="relative w-[90%] p-5 flex flex-col items-center rounded ">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Nos Valeurs */}
        <h2 className="text-center !text-3xl !font-bold text-gray-100 !p-5">
          Nos Valeurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative bg-[#2a2a2a] justify-center rounded-lg shadow-lg !p-17 text-center text-white"
            >
              <div className="absolute top-3 left-3 text-4xl">
                {value.emoji}
              </div>
              <h3 className="!text-xl font-bold mb-2">{value.title}</h3>
              <p className="!text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientComponent;
