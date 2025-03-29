import Image from "next/image";
import React from "react";

interface SponsorSliderProps {
  logos: string[]; // Tableau des URLs des logos
}

const SponsorSlider: React.FC<SponsorSliderProps> = ({ logos }) => {
  // Dupliquer les logos plusieurs fois pour un effet infini plus convaincant
  const repeatedLogos = Array(10).fill(logos).flat(); // Répète 5 fois le tableau (ajustable)

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="relative">
        <div
          className="flex animate-marquee gap-5 whitespace-nowrap"
          style={{
            animationDuration: `${logos.length * 1}s`, // Durée plus longue pour un effet fluide
          }}
        >
          {repeatedLogos.map((logo, index) => (
            <Image
              width={50}
              height={50}
              key={index}
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="h-16 object-contain" // Pas besoin de mx-6 grâce à gap-5
              unoptimized // Ajouté pour éviter les optimisations Next.js qui pourraient casser l'effet
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / 5}%); /* Ajusté pour 5 répétitions */
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused; /* Pause au survol (optionnel) */
        }
      `}</style>
    </div>
  );
};

export default SponsorSlider;
