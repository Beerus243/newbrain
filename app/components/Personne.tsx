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
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: "600px" }}
    >
      {/* Slides */}
      <div className="flex justify-center items-center">
        {Employees.map((employee, index) => (
          <div
            key={employee.id}
            className={`flex-shrink-0 m-7 w-62 h-76 flex flex-col items-center justify-center mx-4 transition-transform duration-700 ${
              index === currentIndex ? "scale-110 z-10" : "scale-90 opacity-50"
            }`}
          >
            <div className="card shadow-lg rounded-lg p-6 border border-white flex flex-col justify-center items-center">
              <img
                src={employee.imageUrl}
                alt={employee.name}
                className="w-full h-64 object-cover rounded-lg mb-4 border-4 border-orange-500"
              />
              {/* Conteneur pour le nom et le rôle */}
              <div className="bg-white text-black p-4 rounded-lg shadow-md w-full text-center">
                <h3 className="text-lg font-bold">{employee.name}</h3>
                <p className="text-sm">{employee.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-white p-2 rounded-full hover:bg-gray-600"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-white p-2 rounded-full hover:bg-gray-600"
      >
        &#8594;
      </button>
    </div>
  );
}

export default EmployeeCarousel;
