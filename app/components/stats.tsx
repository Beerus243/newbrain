import { IconType } from "react-icons";
import { FaChartLine, FaMoneyBillWave, FaUserGraduate } from "react-icons/fa";
import styles from "../Card/Card.module.css";
import React, { useRef, useEffect, useState } from "react";

interface StatCardType {
  icon: IconType;
  stat: string;
  unity: string;
}

// Composant pour chaque carte avec animation indépendante
function StatCard({ stat, index }: { stat: StatCardType; index: number }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Réinitialiser l'animation : on supprime puis on réapplique la classe
            setAnimate(false);
            // On utilise requestAnimationFrame pour forcer le reflow
            requestAnimationFrame(() => {
              setAnimate(true);
            });
          } else {
            setAnimate(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative bg-gray-50 rounded-lg !p-7 !text-black h-auto w-full text-center shadow-lg ${styles.card}`}
    >
      <div
        ref={textRef}
        className={animate ? "fadeInUpContainer" : ""}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <stat.icon size={30} className={"text-black"} />
        <div className={"text-2xl font-bold text-black"}>{stat.stat}</div>
        <div className={"text-sm text-black"}>{stat.unity}</div>
      </div>
    </div>
  );
}

export function StatsSection() {
  const stats: StatCardType[] = [
    {
      icon: FaChartLine,
      stat: "+27%",
      unity: "de Productivité",
    },
    {
      icon: FaMoneyBillWave,
      stat: "+30%",
      unity: "d'économie grâce à l'IA",
    },
    {
      icon: FaUserGraduate,
      stat: "+1 000",
      unity: "apprenants formés",
    },
  ];

  return (
    <>
      <div className="relative bottom-0 bg-gradient-to-r from-[#151f2b] via-[#402049] to-[#000000] !p-10 max-md:px-5 flex flex-col items-center gap-5">
        <h3
          className={
            "mb-5 p-5 text-left text-gray-100 !text-3xl !font-bold max-w-5xl mx-auto"
          }
        >
          Notre Mission
        </h3>
        <div className="text-left w-fit  bg-gray-50 rounded-xl text-black leading-6 pb-5 !p-4 text-base !mt-2 max-w-5xl mx-auto">
          Chez Newbrain , nous rendons l'intelligence Artificielle accessible et
          concrète pour tous. Notre mission est d'accompagner les entreprises
          dans leur transformation digitale en formant leurs équipes aux usages
          pratiques de l'IA.
        </div>
        <div
          className={
            "!max-w-5xl !flex w-full !gap-5 !py-10 !mx-auto max-lg:flex-col"
          }
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.unity} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
