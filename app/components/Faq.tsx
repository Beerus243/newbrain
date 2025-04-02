import React, { useState } from "react";
import styles from "./Faq.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Qu'est-ce que l'intelligence artificielle ?",
    answer:
      "L'intelligence artificielle (IA) désigne des systèmes capables d'exécuter des tâches nécessitant l'intelligence humaine, comme la reconnaissance vocale ou la prise de décision.",
  },
  {
    question: "Quels domaines l'IA couvre-t-elle ?",
    answer:
      "L'IA trouve ses applications dans de nombreux secteurs tels que la santé, la finance, l'industrie et bien d'autres, favorisant l'automatisation et l'optimisation des processus.",
  },
  {
    question: "Comment se former à l'IA ?",
    answer:
      "Il existe de nombreux parcours de formation en IA : des cours en ligne, des programmes universitaires et des formations professionnelles adaptés à tous les niveaux.",
  },
  {
    question: "Quels outils utilise-t-on en IA ?",
    answer:
      "Parmi les outils populaires, on retrouve Python, TensorFlow et PyTorch, qui facilitent la modélisation et l'analyse des données.",
  },
  {
    question: "Quels avantages offre une formation en IA ?",
    answer:
      "Se former à l'IA permet d'acquérir des compétences recherchées, d'innover dans divers secteurs et d'optimiser les processus opérationnels.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className={styles.faqContainer}>
        <div
          className={" !text-xl  !font-bold !text-gray-100 !text-center !p-5"}
        >
          {" "}
          FAQ
        </div>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
            </div>
            <div
              className={`${styles.faqAnswer} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
