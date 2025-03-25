// app/Formation/[id]/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { detailFormation } from "../../Formation/data"; // Ajustez le chemin selon votre structure

export type DataFormation = {
  [x: string]: any;
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
  const { id } = useParams(); // id sera une chaîne
  const [formation, setFormation] = useState<DataFormation | null>(null);

  useEffect(() => {
    if (id) {
      const f = detailFormation.find((item) => item.id === Number(id));
      if (f) setFormation(f);
    }
  }, [id]);

  if (!formation) {
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
        <h1 className="text-3xl font-bold mb-5">{formation.title}</h1>
        <Image
          src={formation.image}
          alt={formation.title}
          height={300}
          width={400}
          className="mb-5"
        />
        <p>
          <strong>Presenation:</strong>
          {formation.presentation}
        </p>
        <p>
          <strong>Prerequis:</strong>
          {formation.prerequisites}
        </p>
        <p>
          <strong>Modalités:</strong>
          {formation.evaluationModalities}
        </p>
        <p>
          <strong>Public cible:</strong>
          {formation.targetAudience}
        </p>
        <p>
          <strong>Objectif:</strong>
          {formation.objectives}
        </p>
        <p>
          <strong>Contenu:</strong>
          {formation.content}
        </p>
        <p>
          <strong>Gain:</strong>
          {formation.gain}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default FormationDetailPage;
