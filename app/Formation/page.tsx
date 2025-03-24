"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { detailFormation } from "./data";

type Formation = {
  id: number;
  title: string;
  description?: string;
  points?: string[];
  image: string;
};

const formations: Formation[] = [
  {
    id: 1,
    title: "1. Initiation à l'IA pour les Entreprises",
    points: [
      "Audit complet en intelligence artificielle inclus",
      "Programmes sur mesure, adaptés à votre domaine d'activité",
      "Découverte des outils IA essentiels (ChatGPT, Claude, Perplexity, etc.)",
      "Mise en pratique immédiate avec des exemples concrets et applicables dès le départ",
    ],
    image: "https://picsum.photos/seed/formation1/400/300",
  },
  {
    id: 2,
    title: "2. IA pour les Organisations",
    points: [
      "Audit IA intégré",
      "Concentration sur les outils d'aide à la décision et de gestion",
      "Élaboration et mise en œuvre d'une stratégie IA sur mesure",
      "Accompagnement personnalisé pour évaluer les résultats tangibles",
    ],
    image: "https://picsum.photos/seed/formation2/400/300",
  },
  {
    id: 3,
    title: "3. IA pour les Équipes Commerciales",
    points: [
      "Automatisez la recherche de prospects grâce à l'IA",
      "Améliorez la qualification des leads",
      "Boostez la performance de vos équipes commerciales",
      "Prenez des décisions éclairées grâce à des données précises",
    ],
    image: "https://picsum.photos/seed/formation3/400/300",
  },
  {
    id: 4,
    title: "4. IA Appliquée au Marketing",
    points: [
      "Générez du contenu marketing avec l'intelligence artificielle",
      "Optimisez vos campagnes publicitaires",
      "Analysez et exploitez vos données de manière plus efficace",
      "Personnalisez l'expérience client pour maximiser l'engagement",
    ],
    image: "https://picsum.photos/seed/formation4/400/300",
  },
  {
    id: 5,
    title: "5. IA pour les Ressources Humaines",
    points: [
      "Simplifiez le recrutement grâce à l'IA",
      "Automatisez les tâches administratives récurrentes",
      "Renforcez la fidélisation des talents",
      "Libérez du temps pour des initiatives stratégiques",
    ],
    image: "https://picsum.photos/seed/formation5/400/300",
  },
  {
    id: 6,
    title: "6. Découverte de l'Intelligence Artificielle",
    points: [
      "Exploration des fondamentaux de l'IA",
      "Formation adaptée à votre secteur d'activité",
      "Maîtrise des outils d'IA générative",
      "Mise en pratique avec des cas concrets dès le premier jour",
    ],
    image: "https://picsum.photos/seed/formation6/400/300",
  },
];

export default function FormationPage() {
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(
    null
  );

  const openFormation = (formation: Formation) => {
    setSelectedFormation(formation);
  };

  const closeFormation = () => {
    setSelectedFormation(null);
  };

  const Formations = () => {
    const router = useRouter();
  };

  return (
    <>
      <Header />
      {/* Espace pour ne pas masquer le header fixe */}
      <div className="h-40"></div>

      <div className="md:grid text-white md:grid-cols-3 gap-5 flex w-full overflow-x-auto py-9">
        {formations.map((formation) => (
          <div
            key={formation.id}
            className="bg-[#2a2a2a] !w-full max-md:!w-[1000px] !rounded-lg !border-2 !border-[#444]"
          >
            <Image
              src={formation.image}
              alt={formation.title}
              height={300}
              width={400}
              sizes="100vw"
              className="w-full max-md:!w-[400px]"
            />
            <div className="!p-5 !flex !flex-col gap-5 !justify-between max-md:!w-[350px]">
              <h3 className="!text-2xl">{formation.title}</h3>
              {formation.points ? (
                <div className="flex-1">
                  <ul className="!h-full flex flex-col gap-3">
                    {formation.points.map((point, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-green-700">
                          <IoIosCheckmark size={30} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="flex-1">{formation.description}</p>
              )}

              <button
                onClick={() => openFormation(formation)}
                className="w-full text-nowrap !py-2.5 cursor-pointer !px-5 !bg-orange-600 !rounded-md"
              >
                Voir la Formation
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modale de détails de la formation */}
      {selectedFormation && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={closeFormation}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {selectedFormation.title}
            </h2>
            <Image
              src={selectedFormation.image}
              alt={selectedFormation.title}
              height={200}
              width={300}
              className="mb-4"
            />
            {selectedFormation.points && (
              <ul className="flex flex-col gap-2 mb-4">
                {selectedFormation.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <IoIosCheckmark size={20} className="text-green-700" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {selectedFormation.description && (
              <p className="mb-4">{selectedFormation.description}</p>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
