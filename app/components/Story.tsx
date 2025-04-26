import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Nathalie Bouvard",
    role: "CEO",
    imageUrl: "/image/diane.jpg",
    comment:
      "Grâce à cette formation, j'ai pu transformer mon entreprise et intégrer l'IA dans mes processus quotidiens. Une expérience incroyable !",
  },
  {
    id: 2,
    name: "Muna Kongolo",
    role: "Directeur technique",
    imageUrl: "/image/diane.jpg",
    comment:
      "Les cours sont clairs, précis et très bien structurés. J'ai appris à utiliser des outils d'IA que je ne connaissais pas auparavant.",
  },
  {
    id: 3,
    name: "Diane Mamoudou",
    role: "Directeur de la formation",
    imageUrl: "/image/diane.jpg",
    comment:
      "Une formation qui a changé ma vision de l'IA. Je recommande vivement à tous ceux qui veulent rester à la pointe de la technologie.",
  },
];

export function Story() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change toutes les 5 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="!p-12  text-black bg-white w-full">
      {/* Titre */}
      <h2 className="!text-3xl !font-extrabold !text-start !mb-8">
        Histoires vraies <br /> transformations réels
      </h2>

      {/* Conteneur des cartes */}
      <div className="relative w-full max-w-4xl !mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="!bg-[#D9D9D9] !text-black !rounded-lg !shadow-lg !p-9 w-full flex-shrink-0"
            >
              {/* Image et informations */}
              <div className="flex items-center !mb-4">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="!w-16 !h-16 rounded-full object-cover !mr-4"
                />
                <div>
                  <h3 className="!text-lg !font-bold">{testimonial.name}</h3>
                  <p className="!text-sm text-black">{testimonial.role}</p>
                </div>
              </div>
              {/* Commentaire */}
              <p className="!text-black">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
