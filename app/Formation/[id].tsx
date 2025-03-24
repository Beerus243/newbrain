"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // ou "next/navigation" selon votre version de Next.js
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
// Importez le type et le tableau depuis votre fichier de données
import { Formations as formationsList, DataFormation } from "../Formation/data";

const FormationDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedFormation, setSelectedFormation] =
    useState<DataFormation | null>(null);

  useEffect(() => {
    if (id) {
      const formationFound = formationsList.find((f) => f.id === Number(id));
      if (formationFound) {
        setSelectedFormation(formationFound);
      }
    }
  }, [id]);

  if (!selectedFormation) {
    return (
      <>
        <Header />
        <div className="h-40"></div>
        <div className="text-white text-center py-20">
          <h1 className="text-3xl">Formation non trouvée</h1>
          <p>La formation demandée n'a pas été trouvée.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="h-40"></div>
      <div className="text-white py-9 px-5">
        <h1 className="text-3xl font-bold mb-5">{selectedFormation.title}</h1>
        <Image
          src={selectedFormation.image}
          alt={selectedFormation.title}
          height={300}
          width={400}
          className="mb-5"
        />
        {selectedFormation.points && (
          <ul className="flex flex-col gap-3 mb-5">
            {selectedFormation.points.map((point: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-700">
                  <Image
                    src="/icons/check.svg"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                </span>
                {point}
              </li>
            ))}
          </ul>
        )}
        {selectedFormation.description && (
          <p>{selectedFormation.description}</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FormationDetailPage;
