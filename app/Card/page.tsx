import React from "react";
import styles from "./Card.module.css";

const Card: React.FC = () => {
  return (
    <div
      className={`${styles.card} relative mx-auto !p-9 w-40 h-40 bg-[#1c1f2b] text-center rounded-lg`}
    >
      <h1 className="text-white">
        Bonjour Next.js avec Tailwind CSS et TypeScript
      </h1>
    </div>
  );
};

export default Card;
