"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { detailFormation } from "../Data"; // Vérifiez le chemin
import Page from "../page";

export type DataFormation = {
  id: number;
  title: string;
  presentation: string;
  image: string;
  prerequisites: string;
  evaluationModalities: string;
  targetAudience: string;
  objectives: string;
  content: string;
  gain: string;
};

const FormationDetailPage: React.FC = () => {
  const { id } = useParams();
  const [formation, setFormation] = useState<DataFormation | null>(null);

  useEffect(() => {
    if (id) {
      const found = detailFormation.find((f) => f.id === Number(id));
      if (found) setFormation(found);
    }
  }, [id]);

  if (!formation) {
    return (
      <>
        <Header />
        <div className="h-40"></div>
        <section className="text-white text-center py-20">
          <h1 className="text-3xl font-bold tracking-wide">
            Formation non trouvée
          </h1>
          <p className="text-white mt-4">
            La formation demandée n'existe pas ou n'a pas pu être chargée.
          </p>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {/* Espace pour compenser le header fixe */}
      <div className="h-40"></div>
      <main className="max-w-6xl !mx-auto !p-10 flex flex-col gap-5">
        {/* Titre principal */}
        {/* <section className="mb-12"> */}
        <h1 className="!text-4xl !font-extrabold text-white text-center !drop-shadow-lg">
          {formation.title}
        </h1>
        {/* </section> */}

        {/* Section Présentation et Image */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <h1 className="!text-4xl !font-bold text-white !pt-8 !pb-8">
              Présentation
            </h1>
            <p className="text-xl text-white leading-relaxed">
              {formation.presentation}
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={formation.image}
              alt={formation.title}
              width={550}
              height={350}
              className="rounded-xl shadow-2xl object-cover border border-gray-700"
            />
          </div>
        </section>

        {/* Section Détails sous forme de cartes */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Prérequis", content: formation.prerequisites },
              {
                title: "Modalités d’évaluation",
                content: formation.evaluationModalities,
              },
              { title: "Public cible", content: formation.targetAudience },
              { title: "Objectifs", content: formation.objectives },
              { title: "Contenu", content: formation.content },
              { title: "Gain", content: formation.gain },
            ].map((item, index) => (
              <div
                key={index}
                className="!p-6 bg-[#2a2a2a] border border-white-700 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col gap-3"
              >
                <h3 className="text-2xl !font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <div className="text-5xl text-center text-white pt-6 font-bold">
        {" "}
        Nos autres Formations
      </div>
      <Page />
      <Footer />
    </>
  );
};

export default FormationDetailPage;
