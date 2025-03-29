import { FaUserFriends } from "react-icons/fa";

const Audit = () => {
  return (
    <div className={`md:grid text-white md:grid-cols-2 gap-3 bg-blue-500`}>
      <div
        className={
          "bg-[#2a2a2a] rounded-lg !p-9 h-80 w-180 text-center shadow-lg"
        }
      >
        <FaUserFriends className={"text-5xl text-orange-600 mb-2"} />
        <h3 className={"text-center !text-4xl !font-bold text-gray-50 !mb-5"}>
          Réalisation de l'audit
        </h3>
        <ul className={"list-none flex flex-col gap-3"}>
          <li className="text-md text-start ">
            {"✅"}
            Recueillir les informations détaillées sur les modes opératoires,
            les outilsutilisés et la culture d'entreprise.
          </li>
          <li className="text-md text-start">
            {"✅"}
            Définition des priorités et choix des cas d'usages à prioriser.
          </li>
        </ul>
      </div>
      <div
        className={
          "bg-[#2a2a2a] rounded-lg !p-3 h-80 w-180 text-center shadow-lg "
        }
      >
        <FaUserFriends className={"text-5xl text-orange-600 !mb-4"} />
        <h3 className={"text-center !text-3xl !font-bold text-gray-50 !mt-5"}>
          Identification des inefficacités opérationnelles
        </h3>
        <ul className={"list-none"}>
          <li>
            {"✅"}
            Utilisation de matrices d'évaluation et scoring des données.
          </li>
        </ul>
      </div>
      <div
        className={
          "bg-[#2a2a2a] text-xl rounded-lg !p-3 h-80 w-180 text-center shadow-lg "
        }
      >
        <FaUserFriends className={"text-4xl text-orange-600 mb-2"} />
        <h3 className={"text-center text-lg font-semibold text-gray-50 mt-2"}>
          Réalisation de l'audit
        </h3>
        <ul className={"list-none"}>
          <li>
            {" ✅"}
            Recueillir les informations détaillées sur les modes opératoires,
            les outilsutilisés et la culture d'entreprise.
          </li>
          <li>
            {" ✅"}
            Définition des priorités et choix des cas d'usages à prioriser.
          </li>
        </ul>
      </div>
      <div
        className={
          "bg-[#2a2a2a] text-xl rounded-lg !p-3 h-80 w-180 text-center shadow-lg "
        }
      >
        <FaUserFriends className={"text-4xl text-orange-600 mb-2"} />
        <h3 className={"text-center text-lg font-semibold text-gray-50 mt-2"}>
          Réalisation de l'audit
        </h3>
        <ul className={"list-none"}>
          <li>
            {"✅"}
            Recueillir les informations détaillées sur les modes opératoires,
            les outilsutilisés et la culture d'entreprise.
          </li>
          <li>
            {" ✅"}
            Définition des priorités et choix des cas d'usages à prioriser.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Audit;
