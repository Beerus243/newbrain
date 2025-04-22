"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Audit from "./audit";
import Formation from "./formation-info";
import { StatsSection } from "./stats";
import { FormationCard, formations } from "../components/formationCard";
import Services from "./services-newbrain";
import ImageSlider from "./infiniteCarousel";
import Implementation from "./implementation";
import Faq from "./Faq";
import About from "./About";
import EmployeesData from "./Personne"; // Ensure EmployeesData is exported as an array of employee objects

type Formation = {
  id: number;
  title: string;
  description?: string;
  points?: string[];
  image: string;
};

export default function Body() {
  const router = useRouter();
  return (
    <>
      <div
        className="bg-gradient-to-r from-[#151f2b] via-[#402049] to-[#000000] pb-20"
        style={{ fontFamily: "TT Norms, sans-serif" }}
      >
        <div className="relative h-[500px] max-md:!h-auto flex items-center justify-center">
          <div className="flex md:flex-row items-center justify-between w-full max-w-7xl px-5">
            {/* Texte */}
            <div className="flex md:w-1/2 text-center md:text-left">
              <h1 className="!text-5xl max-md:!text-3xl !font-extrabold text-white leading-tight max-md:leading-snug">
                Pro ou Entrepreneur <br />
                <span className="block mt-2">Libérez votre potentiel</span>{" "}
                <br />
                <span className="!text-[#5E17EB] max-md:!text-2xl !font-bold">
                  avec l'IA
                </span>
              </h1>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/image/banner.png"
                alt="Pro et Entrepreneur"
                className="w-50 h-50 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex !justify-center !text-center !gap-5 max-md:flex-col sm:gap-3 max-md:m-8">
          <button
            onClick={() => router.push("/contact")}
            className={
              "!bg-black !rounded-4xl !w-60 !justify-center !text-white !p-2 cursor-pointer !flex !items-center hover:!bg-white hover:!text-black hover:!border-black !border-2 !border-transparent transition-all duration-300 ease-in-out transform hover:scale-102 max-md:!mx-auto"
            }
          >
            <span className="!group-hover:scale-110"></span>
            Prenez rendez-vous
          </button>
        </div>
        <div className="!text-md !font-robotto !sm:text-md text-white !md:text-lg max-w-5xl !mx-auto !lg:text-xl !p-9 !flex !justify-center !text-center !gap-5 max-md:flex-col sm:gap-3 max-md:m-8">
          Équipez vos équipes avec les compétences nécessaires et intégrez les
          solutions d'intelligence artificielle les plus pertinentes pour
          optimiser vos processus. Concentrez-vous sur les activités qui
          génèrent le plus d'impact.
        </div>
      </div>

      <div className="!p-5 max-w-5xl !mx-auto flex justify-center flex-col gap-5">
        <h2 className={` !text-4xl !pt-8 max-md:!text-xl !font-bold text-left`}>
          Nos Services{" "}
        </h2>
        <div className={" text-black  !text-md !text-left"}>
          <p className={" text-md"}>
            Une formation pratique et non Théorique.
            <br />
            Maitriser les fondamentaux de ChatGPT avec une approche directement
            applicable à vos taches quotidiennes. <br />
          </p>
        </div>

        <div
          className={`md:grid  md:grid-cols-3 gap-5 flex w-full !max-w-5xl overflow-x-auto !py-5 `}
        >
          {formations.map((formation) => (
            <FormationCard key={formation.id} {...formation} />
          ))}
        </div>
      </div>

      {/* Reste du composant Body (statistiques, Newbrain, etc.) */}
      <div className={"w-full"}>
        <section
          className={"p-10 border-t border-gray-300 flex flex-col gap-10"}
        >
          <section />
          <About />
          <StatsSection />

          <EmployeesData />
        </section>
        <Faq />
      </div>
    </>
  );
}
