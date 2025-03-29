"use client";
import React from "react";
import {
  FaSink,
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaMoneyBillWave,
  FaUserFriends,
  FaUserGraduate,
} from "react-icons/fa";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import Audit from "./audit";

type Formation = {
  id: number;
  title: string;
  description?: string;
  points?: string[];
  image: string;
};

const formations: Formation[] = [
  {
    id: 1,
    title: "1. Initiation à l'IA pour les Entreprises",
    points: [
      "Audit complet en intelligence artificielle inclus",
      "Programmes sur mesure, adaptés à votre domaine d'activité",
      "Découverte des outils IA essentiels (ChatGPT, Claude, Perplexity, etc.)",
      "Mise en pratique immédiate avec des exemples concrets et applicables dès le départ",
    ],
    image: "https://picsum.photos/seed/formation1/400/300",
  },
  {
    id: 2,
    title: "2. IA pour les Organisations",
    points: [
      "Audit IA intégré",
      "Concentration sur les outils d'aide à la décision et de gestion",
      "Élaboration et mise en œuvre d'une stratégie IA sur mesure",
      "Accompagnement personnalisé pour évaluer les résultats tangibles",
    ],
    image: "https://picsum.photos/seed/formation2/400/300",
  },
  {
    id: 3,
    title: "3. IA pour les Équipes Commerciales",
    points: [
      "Automatisez la recherche de prospects grâce à l'IA",
      "Améliorez la qualification des leads",
      "Boostez la performance de vos équipes commerciales",
      "Prenez des décisions éclairées grâce à des données précises",
    ],
    image: "https://picsum.photos/seed/formation3/400/300",
  },
  {
    id: 4,
    title: "4. IA Appliquée au Marketing",
    points: [
      "Générez du contenu marketing avec l'intelligence artificielle",
      "Optimisez vos campagnes publicitaires",
      "Analysez et exploitez vos données de manière plus efficace",
      "Personnalisez l'expérience client pour maximiser l'engagement",
    ],
    image: "https://picsum.photos/seed/formation4/400/300",
  },
  {
    id: 5,
    title: "5. IA pour les Ressources Humaines",
    points: [
      "Simplifiez le recrutement grâce à l'IA",
      "Automatisez les tâches administratives récurrentes",
      "Renforcez la fidélisation des talents",
      "Libérez du temps pour des initiatives stratégiques",
    ],
    image: "https://picsum.photos/seed/formation5/400/300",
  },
  {
    id: 6,
    title: "6. Découverte de l'Intelligence Artificielle",
    points: [
      "Exploration des fondamentaux de l'IA",
      "Formation adaptée à votre secteur d'activité",
      "Maîtrise des outils d'IA générative",
      "Mise en pratique avec des cas concrets dès le premier jour",
    ],
    image: "https://picsum.photos/seed/formation6/400/300",
  },
];

export default function Body() {
  const router = useRouter();
  return (
    <>
      <div
        className={`flex flex-col !mt-[12%] max-md:!mt-[30%] m-screen gap-5 !justify-center !text-center !px-5 max-w-6xl !mx-auto `}
      >
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
            <span className="group-hover:scale-110"></span>
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

      <div className="!p-5 max-w-6xl !mx-auto flex justify-center flex-col gap-5">
        <h2
          className={`text-white !text-4xl text-center max-md:!text-2xl !font-semibold`}
        >
          Nos programmes de formation en intelligence artificielle{" "}
        </h2>
        <div className={"text-amber-50 text-center text-3xl"}>
          <p className={"text-amber-50 text-center text-base"}>
            De nombreux parcours de formation en IA sont disponibles pour
            accompagner les entreprises face aux défis actuels.
          </p>
        </div>

        <div
          className={`md:grid text-white md:grid-cols-3 gap-5 flex w-300 overflow-x-auto py-5 `}
        >
          {formations.map((formation) => (
            <div
              key={formation.id}
              className={`bg-[#2a2a2a] !w-full max-md:!w-[1000px] !rounded-lg !border-2 !border-[#444]`}
            >
              <Image
                src={formation.image}
                alt={formation.title}
                height={300}
                width={400}
                sizes="100vw"
                className={`w-full max-md:!w-[400px]`}
              />
              <div
                className={
                  "!p-5 !flex !flex-col gap-5 !justify-between max-md:!w-[350px]"
                }
              >
                <h3 className={"!text-2xl"}>{formation.title}</h3>
                {formation.points ? (
                  <div className="">
                    <ul className={"!h-full flex flex-col gap-3"}>
                      {formation.points.map((point, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="text-green-700">
                            <IoIosCheckmark size={30} />
                          </span>{" "}
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className={"flex-1"}>{formation.description}</p>
                )}

                <button
                  className={`w-full text-nowrap !py-2.5 cursor-pointer !px-5 !bg-orange-600 !rounded-md`}
                >
                  Voir la Formation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reste du composant Body (statistiques, Newbrain, etc.) */}
      <div className={"pb-12 pt-12 w-full"}>
        <div className={"flex justify-around flex-wrap gap-5 !p-10"}>
          <div
            className={
              "bg-[#2a2a2a] rounded-lg !p-3 h-50 w-80 text-center shadow-lg "
            }
          >
            <FaChartLine className={"text-6xl text-orange-600 p-4"} />
            <div
              className={
                "text-6xl font-bold text-orange-600 !pb-6 animate-fadeInUp"
              }
            >
              +27%
            </div>
            <div className={"text-xl  text-white font-medium"}>
              de Productivité
            </div>
          </div>
          <div
            className={
              "bg-[#2a2a2a] rounded-lg !p-3 w-80 text-center shadow-lg "
            }
          >
            <FaMoneyBillWave className={"text-6xl text-orange-600 "} />
            <div
              className={
                " text-5xl font-bold text-orange-600 mb-2 animate-fadeInUp"
              }
            >
              +30%
            </div>
            <div
              className={
                "text-xl bg-[#2a2a2a] border rounded-md text-center w-full text-gray-100"
              }
            >
              d'économie grâce à l'IA
            </div>
          </div>
          <div
            className={
              "bg-[#2a2a2a] rounded-lg !p-6 h-50  w-80 text-center shadow-lg "
            }
          >
            <FaUserGraduate className={"text-6xl text-orange-600 p-4"} />
            <div
              className={
                "text-5xl font-bold text-orange-600 mb-2 animate-fadeInUp"
              }
            >
              +1000
            </div>
            <div
              className={
                "text-xl border border-gray-700 p-5 rounded-md text-center w-full text-gray-100"
              }
            >
              apprenants formés
            </div>
          </div>
        </div>

        <section className={"py-10 px-10 mt-10 border-t border-gray-300"}>
          <h2
            className={
              " !text-7xl border-white border-b-2 !font-bold text-gray-100 text-center !p-5"
            }
          >
            Newbrain
          </h2>
          <div className={"flex justify-center !text-4xl gap-5"}>
            <span className={"font-sans !text-3xl !pb-6 text-gray-100"}>
              Audit
            </span>
            <span
              className={
                "font-sans text-3xl !pb-6 text-gray-100 max-md:!text-base"
              }
            >
              Formation
            </span>
            <span
              className={
                "font-sans text-3xl !pb-6 text-gray-100 max-md:!text-base"
              }
            >
              Implémentation
            </span>
            <span
              className={
                "font-sans text-3xl !pb-6 text-gray-100 max-md:!text-base"
              }
            >
              Suivi des résultats
            </span>
          </div>

          <Audit />

          <br />

          {/* Grille de cards pour la Formation */}

          <div
            className={
              "bg-gray-900 rounded-lg shadow-md p-8 mt-8 text-center text-white"
            }
          >
            <h3 className={"font-sans text-lg font-bold mb-4 text-white"}>
              {" "}
              Récommandation post-formation
            </h3>
            <div className={"text-white mt-2 text-left"}>
              Livrable de la fin de la formation rédigé par nos consultants.
              <br />
              Proposition de la road map d'Implémentation des outils IA.
            </div>
          </div>
          <div
            className={"mb-b p-5 text-center text-gray-100 font-sans text-lg"}
          >
            <h3
              className={
                "font-sans text-center justify-center  items-center pt-7 text-2xl font-bold text-gray-100"
              }
            >
              Implémentation{" "}
            </h3>
            <div
              className={
                "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
              }
            >
              Une approche personnalisée pour favoriser la collaboration et
              l'innovation
            </div>
          </div>

          {/* Grille de cards pour la Formation */}
          <div
            className={`md:grid text-white md:grid-cols-3 gap-5 bg-blue-400`}
          >
            <div
              className={
                "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
              }
            >
              <FaCalendarAlt className={"text-4xl text-orange-600 mb-2"} />
              <h3
                className={
                  "text-center text-lg font-semibold text-gray-100 mt-2"
                }
              >
                Evaluation du degré de maturité en IA
              </h3>
              <ul className={"list-none"}>
                <li>
                  Mise en place d'un questionnaire en ligne pour évaluer la
                  maturité, la vision et les attentes des collaborateurs en
                  matière d'IA.
                </li>
                <li>
                  Définition des priorités et choix des cas d'usages à
                  prioriser.
                </li>
              </ul>
            </div>
            <div
              className={
                "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
              }
            >
              <FaUserFriends className={"text-4xl text-orange-600 mb-2"} />
              <h3
                className={
                  "text-center text-lg font-semibold text-gray-100 mt-2"
                }
              >
                Identification des inefficacités opérationnelles
              </h3>
              <ul className={"list-none"}>
                <li>
                  Utilisation de matrices d'évaluation et scoring des données.
                </li>
              </ul>
            </div>
            <div
              className={
                "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
              }
            >
              <FaUserFriends className={"text-4xl text-orange-600 mb-2"} />
              <h3
                className={
                  "text-center text-lg font-semibold text-gray-100 mt-2"
                }
              >
                Réalisation de l'audit
              </h3>
              <ul className={"list-none"}>
                <li>
                  {" "}
                  Recueillir les informations détaillées sur les modes
                  opératoires, les outilsutilisés et la culture d'entreprise.
                </li>
              </ul>
              <ul className={"list-none"}>
                <li>
                  Définition des priorités et choix des cas d'usages à
                  prioriser.
                </li>
              </ul>
            </div>
            <div
              className={
                "border border-gray-700 p-5 rounded-md bg-gray-800 text-center w-full text-gray-100"
              }
            >
              <FaUserFriends className={"text-4xl text-orange-600 mb-2"} />
              <h3
                className={
                  "text-center text-lg font-semibold text-gray-100 mt-2"
                }
              >
                Création de la road map de formation
              </h3>
              <div className={"text-white mt-2 text-left"}>
                <ul className={"list-none"}>
                  <li>
                    Rapport d'audit: Synthèse des données collectées, analyses
                    effectuées et conclusions tirées.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={"mb-b p-5 text-center text-gray-100 font-sans text-lg"}
          >
            <h3
              className={
                "font-sans text-center justify-center  items-center pt-7 text-2xl font-bold text-gray-100"
              }
            >
              Suivis des resultats{" "}
            </h3>
            <div
              className={
                "text-center font-sans text-gray-100 leading-6 pb-5 pt-7 text-base mb-6"
              }
            >
              Un suivi rigoureux pour garantir la réussite du project
            </div>
          </div>
          <div
            className={
              "bg-gray-900 rounded-lg shadow-md p-8 mt-8 text-center text-white "
            }
          >
            <h3 className={"font-sans text-lg font-bold mb-4 text-white"}>
              {" "}
              Optimisation et suivi continue
            </h3>
            <div className={"text-base text-white leanding-6"}>
              <ul className={"list-none"}>
                <li>intégration des retours d'expériencence.</li>
              </ul>
            </div>
            <div className={"text-base text-white leanding-6"}>
              <ul className={"list-none"}>
                <li>
                  Suivi des indicateurs de performance post-implémentation.(KPI)
                </li>
              </ul>
            </div>
            <div className={"text-base text-white leanding-6"}>
              <ul className={"list-none"}>
                <li>Analyse des gains de temps et des réductions de couts.</li>
              </ul>
            </div>
          </div>
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
