// app/formations/[id]/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { formations } from "../Formation.Data"; // Vérifiez le chemin d'importation

interface Formation {
  id: number;
  title: string;
  image: string;
  points?: string[];
}

const FormationDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;

  // Rechercher la formation correspondant à l'identifiant
  const formation = formations.find((f) => f.id === Number(id));

  // Gérer le cas où la formation n'est pas trouvée
  if (!formation) {
    return <div className="p-4 text-red-500">Formation non trouvée.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{formation.title}</h1>
      <img
        src={formation.image}
        alt={formation.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <ul className="list-disc pl-6 space-y-2">
        {formation.points?.map((point, index) => (
          <li key={index} className="text-gray-700">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormationDetail;
