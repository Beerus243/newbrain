"use client";
import React from "react";
import { FaSink } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import Audit from "./audit";
import Formation from "./formation-info";
import { StatsSection } from "./stats";
import { FormationCard, formations } from "../components/formationCard";
import Services from "./services-newbrain";
import ImageSlider from "./infiniteCarousel";

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
          className="absolute z-[-10] inset-0 bg-[url('/image/cover2.png')] bg-cover bg-center"
          style={{ filter: "blur(6px) brightness(40%)" }} // Applique un flou et assombrit
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
        <h2 className="text-center text-white !text-2xl !font-bold !mb-7 !mt-7 !p-4">
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
        <StatsSection />

        <section
          className={"p-10 border-t border-gray-300 flex flex-col gap-10"}
        >
          <h2
            className={
              " !text-5xl border-white border-b-2 !font-bold text-gray-100 text-center !p-5"
            }
          >
            Newbrain
          </h2>

          <Audit />
          <Formation />
          <Services />
        </section>
      </div>

      <h3
        className={
          "font-sans text-center justify-center  items-center pt-7 text-2xl font-bold text-gray-100"
        }
      >
        {" "}
        Les Services IA NewBrain
      </h3>
      <br />
      <div
        className={`md:grid text-white md:grid-cols-3 gap-5 flex w-full overflow-x-auto py-5 `}
      >
        <div
          className={
            "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
          }
        >
          <FaSink className={"text-4xl text-orange-600 mb-2"} />
          <h3
            className={"text-center text-lg font-semibold text-gray-100 mt-2"}
          >
            Formation IA
          </h3>
          <div
            className={
              "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
            }
          >
            Formation IA de vos collaborateurs aux{" "}
            <strong>Fondamentaux et techniques d'IA générative</strong>pour
            comprendre cette rupture technologique et ses applications
          </div>
          <ul className={"list-none"}>
            <li>Contenu adapté aux besoins spécifiques de l'entreprise.</li>
          </ul>
          <div className={"text-white mt-2 text-left"}>
            <ul className={"list-none"}>
              <li> Contenu adapté aux besoins spécifiques de l'entreprise.</li>
            </ul>
          </div>
          <ul className={"list-none"}>
            <li>Implémentatez les outils IA les plus Adaptés à vos process</li>
          </ul>
          <ul className={"list-none"}>
            Maitrisez les Fondamentaux du Prompt Engineering
          </ul>
          <ul className={"list-none"}>
            <li>Formation en présentiel ou a distance</li>
          </ul>
        </div>
        <div
          className={
            "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
          }
        >
          <FaSink className={"text-4xl text-orange-600 mb-2"} />
          <h3
            className={"text-center text-lg font-semibold text-gray-100 mt-2"}
          >
            Audit & Consulting
          </h3>
          <div
            className={
              "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
            }
          >
            Identifiez les opportinités d'innovation et de croissance grace à
            notre audit IA, spécialement concu pour aligner votre technologie
            avec vos ambitions stratégiques
          </div>

          <ul className={"list-none"}>
            <li> Question de préparation. </li>
          </ul>

          <ul className={"list-none"}>
            <li>Tour d'Horizon des outils existants</li>
          </ul>
          <ul className={"list-none"}>
            <li>Entretien avec vos collaorateurs par type de métier</li>
          </ul>
          <ul className={"list-none"}>
            <li>Réalisation d'un rapport de récommendations générales</li>
          </ul>
        </div>
      </div>
      <br />
      <h3
        className={
          "font-sans text-center justify-center  items-center pt-7 text-2xl font-bold text-gray-100"
        }
      >
        {" "}
        Pourquoi choisir NewBrain
      </h3>
      <br />
      <div
        className={`md:grid text-white md:grid-cols-3 gap-5 flex w-full overflow-x-auto py-5 `}
      >
        <div
          className={
            "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
          }
        >
          <FaSink className={"text-4xl text-orange-600 mb-2"} />
          <h3
            className={"text-center text-lg font-semibold text-gray-100 mt-2"}
          >
            Expertise de pointe
          </h3>
          <div
            className={
              "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
            }
          >
            Nos Formateurs et consultant maitrisent les outils IA adaptés à
            votre secteur et vous guident avec précsion
            <br /> Ces exxperts sélectionnent les outils d'IA les plus
            performants pour optimiser le gain de Productivité.
          </div>
        </div>
        <div
          className={
            "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
          }
        >
          <FaSink className={"text-4xl text-orange-600 mb-2"} />
          <h3
            className={"text-center text-lg font-semibold text-gray-100 mt-2"}
          >
            Une approche sur-mesure
          </h3>
          <div
            className={
              "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
            }
          >
            Nos Consultants analysent vos méthodes de travail pendant l'audit.
            <br />
            Développement d'un parcours personnalisé suite aux informations
            Recueillis en interne.
            <br />
            Automatisation et assistants IA Développés pour vous.
          </div>
        </div>
        <div
          className={
            "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
          }
        >
          <FaSink className={"text-4xl text-orange-600 mb-2"} />
          <h3
            className={"text-center text-lg font-semibold text-gray-100 mt-2"}
          >
            Roi mesurable
          </h3>
          <div
            className={
              "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
            }
          >
            Avec Newbrain, vous bénéficiez de résultats concrets.
            <br />
            Nos formations et soltions permettent de réduire vos couts
            opérationnels, d'augmenter la productivité et favoriser la montée en
            competences de vos équipes.
          </div>
        </div>
      </div>

      <h3
        className={
          "font-sans text-center justify-center  items-center pt-7 text-2xl font-bold text-gray-100"
        }
      >
        {" "}
        Certifications et financement par vos OPCOs.{" "}
      </h3>
      <div
        className={
          "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
        }
      >
        {" "}
        Newbrain est certifier Qualiopi et propose des solutions de financement
        pour vos formations
      </div>

      <div
        className={`md:grid text-white md:grid-cols-3 gap-5 flex w-full overflow-x-auto py-5 `}
      >
        <div
          className={
            "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
          }
        >
          <FaSink className={"text-4xl text-orange-600 mb-2"} />
          <h3
            className={"text-center text-lg font-semibold text-gray-100 mt-2"}
          >
            Pour les Entreprises
          </h3>
          <div
            className={
              "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
            }
          >
            Nos Formations sont éligibles au plans de déveppement des
            compétences. Vous pouvez donc béneficier des subventions par les
            Opco et FNE
          </div>
        </div>
        <div
          className={
            "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
          }
        >
          <FaSink className={"text-4xl text-orange-600 mb-2"} />
          <h3
            className={"text-center text-lg font-semibold text-gray-100 mt-2"}
          >
            Pour les particuliers{" "}
          </h3>
          <div
            className={
              "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
            }
          >
            Formations financiables à 100% grace aux aides à la formation et au
            CPF.
          </div>
        </div>
      </div>
      <div
        className={"py-0 px-6 flex justify-center gap-2 mt-5 font-sans text-sm"}
      >
        <button
          className={`${"!py-4 !px-6 !border-none rounded-md cursor-pointer font-sans text-sm transition-transform duration-200 ease-in-out"} ${"!border-orange-600"}`}
        >
          Prenez rendez-vous
        </button>
      </div>
    </>
  );
}
