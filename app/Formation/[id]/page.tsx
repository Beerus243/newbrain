"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation"; // Utilisez useParams et useRouter pour récupérer l'ID et naviguer
import detailFormation from "../Data";
import Header from "../../components/Header";
import Footer from "@/app/components/Footer";

const FormationPage = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const router = useRouter(); // Initialise le router pour la navigation

  // Trouve la formation correspondante
  const formation = detailFormation.find(
    (formation) => formation.id === parseInt(id as string, 10)
  );

  // Si aucune formation n'est trouvée, affiche un message d'erreur
  if (!formation) {
    return (
      <>
        <Header />

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-black">
          <h1 className="text-3xl font-bold">Formation introuvable</h1>
          <p className="text-lg mt-4">
            La formation que vous recherchez n'existe pas.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="h-40 bg-gray-50"></div>
      <div className="flex flex-col items-center gap-10 p-10 bg-gray-100 min-h-screen">
        <div className="w-full max-w-4xl bg-[#402049] text-white !rounded-xl shadow-lg !p-8">
          {/* Titre */}
          <h2 className="!text-3xl !font-bold !mb-4 !text-start">
            {formation.title}
          </h2>

          {/* Présentation */}
          <p className="text-lg !mb-6">{formation.presentation}</p>

          {/* Thèmes */}
          <div className="!mb-6">
            <h3 className="!text-xl !font-semibold !mb-3">Thèmes abordés :</h3>
            <ul className="list-disc list-inside space-y-2">
              {formation.themes.map((theme, index) => (
                <li key={index} className="text-base">
                  {theme}
                </li>
              ))}
            </ul>
          </div>
          {/* Texte final */}
          <p className="text-lg  !font-medium !mb-6">{formation.finalText}</p>
        </div>

        {/* Bouton en dehors du div */}
        <button
          className="!bg-[#402049] !justify-center !items-center !cursor-pointer !text-white hover:text-gray-900 !px-6 !py-3 !rounded-xl !hover:bg-[#4a14c1] !transition-all "
          onClick={() => router.push("/contact")}
        >
          Prenez un rendez-vous
        </button>
      </div>
      <Footer />{" "}
      {/* Assurez-vous d'importer le composant Footer si nécessaire */}
    </>
  );
};

export default FormationPage;
