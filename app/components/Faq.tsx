import React, { useState, useEffect, useRef } from "react";

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
  const faqRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Fermer la FAQ si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={faqRef}
      className="!p-5 text-black flex flex-col items-center !max-w-5xl !mx-auto"
    >
      {/* Titre */}
      <div className="!text-3xl font-bold !text-black !text-start !p-5">
        FAQ
      </div>
      <div className=" !text-left !text-lg bg-[#402049] w-fit rounded-xl !p-4  !text-white">
        Toutes les réponses à vos questions sont ici.
      </div>

      {/* Questions */}
      <div className="flex flex-col gap-5 items-start justify-start !pt-7">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="w-full shadow-xl rounded-xl overflow-hidden max-w-5xl !h-fit"
          >
            <div
              className=" !p-5 cursor-pointer transition-[background-color 0.3s ease, transform 0.3s ease]"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
            </div>
            <div
              className={`bg-[#f5f5f5] text-black !border-b-2 !border-black overflow-hidden transition-[max-height 0.5s ease, padding 0.5s ease] ${
                openIndex === index ? "!p-5 !max-h-[500px]" : "!max-h-0"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
