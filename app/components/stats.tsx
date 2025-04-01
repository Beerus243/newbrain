import { IconType } from "react-icons";
import { FaChartLine, FaMoneyBillWave, FaUserGraduate } from "react-icons/fa";
import styles from "../Card/Card.module.css";

interface StatCardType {
  icon: IconType;
  stat: string;
  unity: string;
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
    <div className={"!max-w-5xl !flex !gap-5 !py-10 !mx-auto !px-5"}>
      {stats.map((stat) => {
        return (
          <div
            key={stat.unity}
            className={`relative bg-[#2a2a2a] rounded-lg !p-9 h-auto w-full text-center shadow-lg  ${styles.card}`}
          >
            <stat.icon size={30} className={"text-orange-600"} />
            <div
              className={"text-2xl font-bold text-orange-600 animate-fadeInUp"}
            >
              {stat.stat}
            </div>
            <div className={"text-sm  text-white"}>{stat.unity}</div>
          </div>
        );
      })}
    </div>
  );
}
