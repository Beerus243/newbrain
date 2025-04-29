"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";

export type Formation = {
  id: number;
  title: string;
  description?: string;
  points?: string[];
  image: string;
};

export const formations: Formation[] = [
  {
    id: 1,
    title: "1. Accuration A IA",
    points: [
      "Axe sur les cas d'usage Des exercices concrets adaptés à votre secteur d'activité et vos besoins spécifiques",
    ],
    image: "/image/discours.jpg",
  },
  {
    id: 2,
    title: "2.Formation et Coaching",
    points: [
      "Gains de Productivité immédiats Obtenez des gains de productivité concrets et mesurables dès la fin de la formation.",
    ],
    image: "/image/workshop.jpeg",
  },
  {
    id: 3,
    title: "3. Programme de Transformation ",
    points: [
      "Nous vous accompagnons stratégiquement por intégrer l'IA dans votre culture et processus de votre entreprise",
    ],
    image: "/image/devantpc.jpg",
  },
];

export const FormationCard = (formation: Formation) => {
  const router = useRouter();

  return (
    <div
      className={`bg-gray-50 hover:bg-[#402049] text-black hover:text-gray-50 hover:cursor-pointer max-md:!min-w-[400px] !w-full flex flex-col text-wrap justify-between !rounded-xl !border-2 !border-[#444] overflow-x-hidden`}
    >
      <Image
        src={formation.image}
        alt={formation.title}
        height={800}
        width={800}
        className={` !w-100 !h-55 !border-b-4 !p-2 !rounded-t-lg object-cover`}
      />
      <div className={"!p-5 !flex h-full !flex-col gap-5 !justify-start "}>
        <h3 className={"!text-xl !font-bold"}>{formation.title}</h3>
        {formation.points ? (
          <div className="">
            <ul className={"!h-full flex flex-col gap-3"}>
              {formation.points.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className={"flex-1"}>{formation.description}</p>
        )}
      </div>
      <button
        onClick={() => router.push(`/Formation/${formation.id}`)}
        className={`w-auto text-nowrap !mx-2.5 !mb-2.5 !py-2.5 cursor-pointer !px-5 !bg-black !text-white !rounded-md hover:!bg-white hover:!border-black hover:!text-black !border-2 !border-transparent transition duration-300 ease-in-out transform hover:scale-102`}
      >
        Voir la Formation
      </button>
    </div>
  );
};
