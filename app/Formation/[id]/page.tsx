// app/Formation/[id]/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { detailFormation } from "../../Formation/data"; // Ajustez le chemin selon votre structure

type Formation = {
  id: number;
  title: string;
  description?: string;
  points?: string[];
  image: string;
};

const FormationDetailPage: React.FC = () => {
  const { id } = useParams(); // id sera une chaîne
  const [formation, setFormation] = useState<Formation | null>(null);

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
        {formation.points && (
          <ul className="flex flex-col gap-3 mb-5">
            {formation.points.map((point: string, index: number) => (
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
        {formation.description && <p>{formation.description}</p>}
      </div>
      <Footer />
    </>
  );
};

export default FormationDetailPage;
