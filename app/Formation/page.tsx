"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FormationCard, formations } from "../components/formationCard";

const FormationPage = () => {
  return (
    <>
      <Header />
      {/* Espace pour ne pas masquer le header fixe */}
      <div className="h-40"></div>

      <div className="md:grid text-white md:grid-cols-3 gap-5  flex flex-col max-w-5xl !mx-auto !p-10 w-full overflow-x-auto ">
        {formations?.map((formation) => (
          <FormationCard key={formation.id} {...formation} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default FormationPage;
