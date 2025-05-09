"use client";
import React from "react";
import Header from "../components/Header";

import { useRouter } from "next/navigation"; // Remplacez next/router par next/navigation
import Footer from "../components/Footer";

const Apropos = () => {
  const router = useRouter(); // Utilisez useRouter de next/navigation

  const cards = [
    {
      title: "Notre Vision",
      description:
        "Nous croyons en un avenir où l'IA transforme positivement les entreprises et les individus.",
      imageUrl: "/image/robot1.jpg",
    },
    {
      title: "Notre Mission",
      description:
        "Accompagner nos clients dans leur transformation digitale grâce à des solutions innovantes.",
      imageUrl: "/image/robot2.jpg",
    },
    {
      title: "Nos Valeurs",
      description:
        "Excellence, innovation, collaboration et impact sont au cœur de tout ce que nous faisons.",
      imageUrl: "/image/services.jpg",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "Nous visons l'excellence dans chaque formation, en nous assurant que nos apprenants acquièrement des compétences concrètes et applicables.",
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

  return (
    <>
      <Header />
      <div className="h-40"></div>
      <div className="relative">
        {/* Bannière */}
        <div
          className="absolute z-[-10] inset-0 bg-[url('/image/cover4.jpg')] bg-cover bg-center"
          style={{
            filter: "blur(2px) brightness(80%)",
          }}
        ></div>
        <div className="!flex !flex-col !items-center !justify-center !text-center !text-white !py-20 !max-w-5xl !mx-auto">
          {/* <h1 className="!text-4xl !font-bold mb-5">Notre Mission</h1>
          <p className="text-lg !max-w-3xl">
            Chez NewBrain, nous rendons l'intelligence Artificielle accessible
            et concrète pour tous. Notre mission est d'accompagner les
            entreprises dans leur transformation digitale en formant leurs
            équipes aux usages pratiques de l'IA.
          </p> */}
        </div>
      </div>

      {/* Section des cartes principales */}
      <div className="!max-w-7xl !mx-auto !p-10 grid grid-cols-1 md:grid-cols-3 !gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`!relative bg-white !rounded-lg !p-9 !h-auto !w-full !text-center !shadow-lg border border-black !max-md:!min-w-[350px]`}
          >
            {/* Image */}
            {card.imageUrl && (
              <img
                src={card.imageUrl}
                alt={card.title}
                className="!w-100 !h-60 object-cover !mb-9 !rounded-t-lg !border-4 !border-orange-500"
              />
            )}
            {/* Contenu */}
            <h3 className="text-left !text-xl !font-bold text-black !mb-5">
              {card.title}
            </h3>
            <p className="text-md text-start">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Section des cartes pour les valeurs */}
      <div className="!max-w-7xl !mx-auto !p-10 grid grid-cols-1 md:grid-cols-2 !gap-10">
        {values.map((value, index) => (
          <div
            key={index}
            className={`!relative bg-white !rounded-lg !p-9 !h-auto !w-full !text-center !shadow-lg !border-1 !border-black !max-md:!min-w-[350px]`}
          >
            {/* Emoji */}
            <div className="text-4xl mb-5">{value.emoji}</div>
            {/* Contenu */}
            <h3 className="text-left !text-xl !font-bold text-black !mb-5">
              {value.title}
            </h3>
            <p className="text-md text-start">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="relative">
        {/* Bannière */}
        <div
          className="absolute z-[-10] inset-0 bg-[url('/image/cover4.jpg')] bg-cover bg-center"
          style={{
            filter: "blur(2px) brightness(80%)",
          }}
        ></div>
        <div className="!flex !flex-col !items-center !justify-center !text-center !text-black !py-20">
          <h1 className="!text-4xl !font-bold mb-5">
            Prêt à transformer votre entreprise avec l'IA ?
          </h1>
          <p className="text-lg max-w-3xl">
            Découvrez comment nos formations peuvent aider votre équipe à
            maîtriser l'IA et à l'intégrer efficacement dans vos processus.
          </p>
          <div className="p-7 !flex !justify-center !text-center !gap-5 max-md:flex-col sm:gap-3 max-md:m-8">
            <button
              onClick={() => router.push("/contact")}
              className={
                "!group !bg-[#ff6600] !rounded-md  !justify-center !text-center  !text-md !p-3 cursor-pointer flex items-center hover:!border-white"
              }
            >
              <span className="!group-hover:scale-110"></span>
              Prenez rendez-vous
            </button>

            <button
              onClick={() => router.push("/Formation")}
              className={
                " !text-md  !justify-center !text-center !p-3 cursor-pointer flex items-center !border-2 !border-white !rounded-md  hover:!border-[#ff6600]"
              }
            >
              Nos formations
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        button {
          transition: all 0.3s ease-in-out;
          transform: scale(1);
        }

        button:hover {
          transform: scale(1.1); /* Agrandit légèrement le bouton */
          box-shadow: 0 4px 15px rgba(255, 102, 0, 0.5); /* Ajoute une ombre */
        }

        button:active {
          transform: scale(
            0.95
          ); /* Réduit légèrement le bouton lorsqu'il est cliqué */
          box-shadow: 0 2px 10px rgba(255, 102, 0, 0.3); /* Réduit l'ombre */
        }
      `}</style>
    </>
  );
};

export default Apropos;
