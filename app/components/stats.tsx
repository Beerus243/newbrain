import { IconType } from "react-icons";
import { FaChartLine, FaMoneyBillWave, FaUserGraduate } from "react-icons/fa";

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
    <div className={"max-w-5xl flex gap-5 !py-10 !mx-auto"}>
      {stats.map((stat) => {
        return (
          <div
            className={
              "bg-[#2a2a2a] rounded-lg !p-3 h-50 w-full text-center shadow-lg "
            }
          >
            <stat.icon size={30} className={"text-orange-600"} />
            <div
              className={
                "text-6xl font-bold text-orange-600 !pb-6 animate-fadeInUp"
              }
            >
              {stat.stat}
            </div>
            <div className={"text-xl  text-white font-medium"}>
              {stat.unity}
            </div>
          </div>
        );
      })}
    </div>
  );
}
