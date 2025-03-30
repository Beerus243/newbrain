"use client";
import React from "react";
import { FaSink } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Audit from "./audit";
import Formation from "./formation-info";
import { StatsSection } from "./stats";
import { FormationCard, formations } from "../components/formationCard";
import Services from "./services-newbrain";
import ImageSlider from "./infiniteCarousel";
import Implementation from "./implementation";
import Chose from "./Chose";

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
        className={`flex flex-col !mt-[9%] max-md:!mt-[30%] m-screen gap-5 !justify-center !text-center !px-5 max-w-6xl !mx-auto  !p-5 overflow-hidden relative`}
      >
        <div
          className="absolute z-[-10] inset-0 bg-[url('/image/Brain.png')] bg-cover bg-center"
          style={{ filter: "blur(4px) brightness(90%)" }} // Applique un flou et assombrit
        ></div>

        <h5
          className={`bg-[#f5f5f5] text-black !w-fit  !mx-auto !px-5 !text-sm/5`}
        >
          FORMATION IA POUR PROFESSIONNELS & PARTICULIERS
        </h5>
        <h1
          className={`text-white !text-5xl  max-md:!text-3xl !font-extrabold`}
        >
          Pro ou Enrepeneur <br />
          <span
            className={`!text-orange-500  max-md:!text-3xl !font-extrabold`}
          >
            Libérez votre potentiel avec l'IA{" "}
          </span>
        </h1>
        <div className="text-white !text-xl sm:text-lg md:text-xl lg:text-2xl !p-5">
          Équipez vos équipes avec les compétences nécessaires et intégrez les
          solutions d'intelligence artificielle les plus pertinentes pour
          optimiser vos processus. Concentrez-vous sur les activités qui
          génèrent le plus d'impact.
        </div>
        <div className="flex !justify-center !text-center !gap-5 max-md:flex-col sm:gap-3 max-md:m-8">
          <button
            onClick={() => router.push("/contact")}
            className={
              "!group !bg-[#ff6600] !rounded-md  !justify-center !text-center !h-fit !text-white !text-xl !p-5 cursor-pointer flex items-center"
            }
          >
            <span className="!group-hover:scale-110"></span>
            Prenez rendez-vous
          </button>

          <button
            className={
              "!h-fit !text-white !text-xl  !justify-center !text-center !p-5 cursor-pointer flex items-center !border-2 !border-white !rounded-md  hover:!border-[#ff6600]"
            }
          >
            Nos formations
          </button>
        </div>
        <p className={"text-center text-xl text-white"}>
          Ils ont bénéficié de l'expertise et de l'accompagnement de nos
          formateurs spécialisés.
        </p>
      </div>
      <div className="w-full max-w-5xl !mx-auto">
        <h2 className="text-center text-white !text-2xl !font-bold !mb-4 !mt-4 !p-4">
          L'avenir avec l'ia
        </h2>
        <ImageSlider
          logos={[
            "/image/chatgpt.jpeg",
            "/image/DeepSeek.jpeg",
            "/image/gemini.jpeg",
            "/image/grok.png",
            "/image/copilot.jpeg",
            "/image/grok.png",
            "/image/Midjourney.png",
          ]}
        />
      </div>
      <div className="!p-5 max-w-5xl !mx-auto flex justify-center flex-col gap-5">
        <h2
          className={`text-white !text-3xl text-center max-md:!text-2xl !font-bold`}
        >
          Nos programmes de formation en intelligence artificielle{" "}
        </h2>
        <div className={"text-amber-50 text-center text-xl"}>
          <p className={"text-amber-50 text-center text-xl"}>
            De nombreux parcours de formation en IA sont disponibles pour
            accompagner les entreprises face aux défis actuels.
          </p>
        </div>

        <div
          className={`md:grid text-white md:grid-cols-3 gap-5 flex w-full !max-w-5xl overflow-x-auto !py-5 `}
        >
          {formations.map((formation) => (
            <FormationCard key={formation.id} {...formation} />
          ))}
        </div>
      </div>
      {/* Reste du composant Body (statistiques, Newbrain, etc.) */}
      <div className={"w-full"}>
        <section
          className={
            "p-10 border-t border-gray-300 flex flex-col gap-10 bg-indigo-300/30"
          }
        >
          <StatsSection />
          <h2
            className={
              " !text-5xl border-white border-b-2 !font-bold text-gray-100 text-center !p-5"
            }
          >
            Newbrain
          </h2>

          <Audit />
          <Formation />
          <Implementation />
          <Services />
          <Chose />
        </section>
      </div>
    </>
  );
}
