import React, { useState, useEffect } from "react";

const Employees = [
  {
    id: 1,
    name: "Nathalie BOUVARD",
    role: "Co-fondatrice & CEO",
    imageUrl: "/image/diane.jpg",
  },
  {
    id: 2,
    name: "MUNA KONGOLO Medi",
    role: "Co-fondateur & Directeur technique",
    imageUrl: "/image/diane.jpg",
  },
  {
    id: 3,
    name: "DIANE Mamoudou",
    role: "Co-fondateur & Directeur de la formation",
    imageUrl: "/image/diane.jpg",
  },
];

export function EmployeeCarousel() {
  return (
    <div id="about" className="!p-20 text-white">
      {/* Titre */}
      <h2 className="!text-3xl !font-extrabold !text-start !mb-8">
        Qui sommes-nous
      </h2>

      {/* Cartes des employés */}
      <div className="flex flex-wrap justify-center gap-8">
        {Employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-[#402049] hover:bg-white shadow-lg overflow-hidden max-w-xs w-full md:w-1/3 transition-transform transform text-white hover:text-black !rounded-3xl hover:scale-101"
          >
            {/* Image */}
            <img
              src={employee.imageUrl}
              alt={employee.name}
              className="w-full h-40 object-cover"
            />
            {/* Contenu */}
            <div className="!p-4 text-center ">
              <h3 className="!text-lg !font-bold">{employee.name}</h3>
              <p className="!text-sm ">{employee.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeCarousel;
