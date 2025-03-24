// pages/formations/[id].tsx
"use client";
import { useRouter } from "next/router";
import { formations } from "./Formation.Data"; // Assurez-vous que le chemin est correct

const FormationDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Rechercher la formation correspondant à l'identifiant
  const formation = formations.find((f) => f.id === Number(id));

  // Gérer le cas où la formation n'est pas trouvée
  if (!formation) {
    return <p>Formation non trouvée.</p>;
  }

  return (
    <div>
      <h1>{formation.title}</h1>
      <img src={formation.image} alt={formation.title} />
      <ul>
        {formation.points?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormationDetail;
