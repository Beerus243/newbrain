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
      <div className={""}>
        <div className="bg-gradient-to-r !p-15 from-[#004AAD] to-[#CB6CE6] pb-20">
          <div className="relative h-80  max-md:!h-60 flex items-center justify-center">
            <h1
              className={`absolute bottom-5 text-center !text-5xl max-md:!text-2xl !font-extrabold !font-Poppins text-white leading-15 max-md:leading-10`}
            >
              Pro ou Entrepreneur <br />
              Libérez votre potentiel <br />{" "}
              <span
                className={`!text-[#5E17EB] max-md:!text-xl !font-extrabold`}
              >
                avec l'IA
              </span>
            </h1>
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
          <div className=" !text-md !sm:text-md text-white !md:text-lg max-w-5xl !mx-auto !lg:text-xl !p-9 !flex !justify-center !text-center !gap-5 max-md:flex-col sm:gap-3 max-md:m-8">
            Équipez vos équipes avec les compétences nécessaires et intégrez les
            solutions d'intelligence artificielle les plus pertinentes pour
            optimiser vos processus. Concentrez-vous sur les activités qui
            génèrent le plus d'impact.
          </div>
        </div>

        <div className="!p-5 max-w-5xl !mx-auto flex justify-center flex-col gap-5">
          <h2
            className={` !text-4xl !pt-8 max-md:!text-xl !font-bold text-left`}
          >
            Nos Services{" "}
          </h2>
          <div className={" text-black  !text-md !text-left"}>
            <p className={" text-md"}>
              Une formation pratique et non Théorique.
              <br />
              Maitriser les fondamentaux de ChatGPT avec une approche
              directement applicable à vos taches quotidiennes. <br />
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
