"use client";
import React, { useEffect } from "react";
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
import Valeurs from "./Valeurs";
import Story from "./Story";
import Articles from "./Articles";

type Formation = {
  id: number;
  title: string;
  description?: string;
  points?: string[];
  image: string;
};

export default function Body() {
  const router = useRouter();

  useEffect(() => {
    const container = document.getElementById("shooting-stars-container");
    const meteorCount = 30; // ajustez selon l'effet désiré

    if (container) {
      for (let i = 0; i < meteorCount; i++) {
        const star = document.createElement("div");
        star.classList.add("shooting-star");

        // paramètres aléatoires
        const startX = Math.random() * 100; // position horizontale de départ (en %)
        const delay = Math.random() * 10; // délai avant apparition (en secondes)
        const duration = 0.5 + Math.random() * 1.5; // durée du trajet (entre 0.5s et 2s)
        const length = 20 + Math.random() * 60; // longueur du trait (entre 20px et 80px)
        const opacity = 0.2 + Math.random() * 0.8; // opacité initiale

        // on assigne ces valeurs aux variables CSS
        star.style.setProperty("--start-x", `${startX}vw`);
        star.style.setProperty("--delay", `${delay}s`);
        star.style.setProperty("--duration", `${duration}s`);
        star.style.setProperty("--length", `${length}px`);
        star.style.setProperty("--opacity", opacity.toString());

        container.appendChild(star);
      }
    }
  }, []);

  return (
    <>
      <div
        className="relative h-160 max-md:!h-135 rounded-b-3xl bg-gradient-to-r from-[#151f2b] via-[#402049] to-[#000000] !pb-50"
        style={{ fontFamily: "TT Norms, sans-serif" }}
      >
        <div
          id="shooting-stars-container"
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        ></div>
        <div className="max-md:!h-auto flex items-center justify-center !pt-30">
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-2 !gap-2">
            {/* Texte */}
            <div className="md:w-auto text-center md:text-left flex-shrink-0 flex flex-col items-center">
              <h1 className="!text-6xl text-center max-md:!text-2xl !font-extrabold !pb-5  text-white max-md:leading-snug">
                Pro ou Entrepreneur
                <br />
                <span className=" text-[#5E17EB]">Libérez votre potentiel</span>
                <br />
                <span className="block text-center">avec l'IA</span>
              </h1>
              <button
                onClick={() => router.push("/contact")}
                className={
                  "!bg-black !rounded-4xl !w-60 !justify-center !text-white !p-3 cursor-pointer !flex !items-center hover:!bg-white hover:!text-black hover:!border-black !border-2 !border-transparent transition-all duration-300 ease-in-out transform hover:scale-102 !mt-7"
                }
              >
                Prenez rendez-vous
              </button>
            </div>

            {/* Image */}
            <div className="block md:w-auto justify-center !gap-5 items-center max-md:hidden">
              <img
                src="/image/banner.png"
                alt="Pro et Entrepreneur"
                className="w-70 h-90 object-cover  rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex !justify-center !text-center !gap-5 max-md:flex-col sm:gap-3 max-md:m-8"></div>
        <div className="!text-md !font-robotto !sm:text-md text-white !md:text-lg max-w-7xl !mx-auto !lg:text-xl !p-9 !flex !justify-center !text-center !gap-5 max-md:flex-col sm:gap-3 max-md:m-8">
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
        <div className={" bg-[#402049] w-fit !p-5 !shadow-lg !rounded-xl"}>
          <div className={" text-white  !text-md !text-left"}>
            <p className={" text-md"}>
              Une formation pratique et non Théorique.
              <br />
              Maitriser les fondamentaux de ChatGPT avec une approche
              directement applicable à vos taches quotidiennes. <br />
            </p>
          </div>
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
          <div className="bg-gradient-to-r from-[#151f2b] via-[#402049] to-[#000000]">
            <About />
            <StatsSection />

            <EmployeesData />

            <Valeurs />
            <Story />
          </div>
        </section>
        <Faq />
        <Articles />
      </div>
    </>
  );
}
