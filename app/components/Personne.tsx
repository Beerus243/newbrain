import React, { useState, useEffect } from "react";

const Employees = [
  {
    id: 1,
    name: "Nathalie Bouvard",
    role: "Co-fondatrice & CEO",
    imageUrl: "/image/nathalie.jpg",
  },
  {
    id: 2,
    name: "Mamoudou Diane",
    role: "Co-fondateur & Directeur de la formation",
    imageUrl: "/image/diane.jpg",
  },
  {
    id: 3,
    name: "Medi",
    role: "Co-fondateur & Directeur Technique",
    imageUrl: "/image/diane.jpg",
  },
];

export function EmployeeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Passage automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Employees.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Employees.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center max-md:h-9"
      style={{ height: "450px" }}
    >
      {/* Slides */}
      <div className="flex justify-center items-center">
        {Employees.map((employee, index) => (
          <div
            key={employee.id}
            className={`flex-shrink-0 m-7 w-57 h-56 flex flex-col items-center justify-center mx-4 transition-transform duration-700 max-md:w-37 max-md:h-36 ${
              index === currentIndex ? "scale-108 z-10" : "scale-85 opacity-50"
            }`}
          >
            <div className="card shadow-lg  p-3 flex flex-col justify-center items-center">
              <img
                src={employee.imageUrl}
                alt={employee.name}
                className="w-full h-full object-cover  mb-4 !border-1 !border-orange-500"
              />
              {/* Conteneur pour le nom et le rôle */}
              <div className="bg-black text-white !p-5 shadow-md w-full text-center !border-2 !border-[#FF6600] max-md:!p-2">
                <h3 className="!text-sm !font-semibold max-md:!text-lg">
                  {employee.name}
                </h3>
                <p className="!text-sm">{employee.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full hover:bg-[#FF6600] transition-colors text-3xl z-10"
        aria-label="Précédent"
      >
        ⬅️
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full hover:bg-[#FF6600] transition-colors text-3xl z-10"
        aria-label="Suivant"
      >
        ➡️
      </button>
    </div>
  );
}

export default EmployeeCarousel;
