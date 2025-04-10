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
      className={`relative bg-[#2a2a2a] rounded-lg !p-9 h-auto w-full text-center shadow-lg ${styles.card}`}
    >
      <div
        ref={textRef}
        className={animate ? "fadeInUpContainer" : ""}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <stat.icon size={30} className={"text-orange-600"} />
        <div className={"text-2xl font-bold text-orange-600"}>{stat.stat}</div>
        <div className={"text-sm text-white"}>{stat.unity}</div>
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
    <div
      className={
        "!max-w-5xl !flex w-full !gap-5 !py-10 !mx-auto !px-5 max-lg:flex-col"
      }
    >
      {stats.map((stat, index) => (
        <StatCard key={stat.unity} stat={stat} index={index} />
      ))}
    </div>
  );
}
