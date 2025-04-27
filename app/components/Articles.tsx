import React from "react";

const articles = [
  {
    id: 1,
    imageUrl: "/image/robot1.jpg",
    category: "Actualités",
    date: "27 Avril 2025",
    title: "L'IA révolutionne le monde de l'entreprise",
    excerpt:
      "Découvrez comment l'intelligence artificielle transforme les processus métiers et ouvre de nouvelles opportunités.",
  },
  {
    id: 2,
    imageUrl: "/image/robot1.jpg",
    category: "Actualités",
    date: "20 Avril 2025",
    title: "Les dernières avancées en IA",
    excerpt:
      "Un aperçu des innovations récentes en intelligence artificielle et leur impact sur notre quotidien.",
  },
  {
    id: 3,
    imageUrl: "/image/robot1.jpg",
    category: "Actualités",
    date: "15 Avril 2025",
    title: "Formation IA : Pourquoi se lancer ?",
    excerpt:
      "Découvrez pourquoi se former à l'IA est essentiel pour rester compétitif dans un monde en constante évolution.",
  },
];

export function Articles() {
  return (
    <div className="!p-20  text-white">
      {/* Titre principal */}
      <h2 className="!text-4xl text-black !font-extrabold !text-starts !mb-6">
        Nos News <span className="text-[#402049]"> IA</span>
      </h2>
      <p className="!text-md !text-start bg-[#402049]  !p-4 w-fit !text-white rounded-lg !mb-7">
        Toutes nos articles qui traitent de l'Actualités autour de l'IA
      </p>

      {/* Grille des articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white hover:bg-[#402049] !border-2 !border-black text-black !shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:text-white duration-300"
          >
            {/* Image */}
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-56 object-cover"
            />
            {/* Contenu */}
            <div className="!p-6">
              {/* Catégorie et date */}
              <div className="flex justify-between items-center !mb-4">
                <span className="text-sm !font-bold text-white uppercase bg-[#402049]  p-6">
                  {article.category}
                </span>
                <span className="text-sm ">{article.date}</span>
              </div>
              {/* Titre */}
              <h3 className="!text-xl font-bold !mb-3">{article.title}</h3>
              {/* Extrait */}
              <p className="text-sm !mb-6">{article.excerpt}</p>
              {/* Lien */}
              <a
                href="#"
                className="text-sm !font-bold text-[#5E17EB] hover:underline"
              >
                Lire l'article →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="flex flex-col !items-center !justify-center bg-[#402049] text-white !rounded-3xl !h-80 !p-5 w-[99%] !mx-auto !mt-12">
        {/* Titre */}
        <h2 className="!text-3xl !font-extrabold !mb-4">La Newsletter</h2>
        {/* Sous-titre */}
        <p className="text-lg !text-center !mb-6">
          Votre rendez-vous régulier avec l'IA utile et concrète
        </p>
        {/* Champ email */}
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Entrez votre email"
            className="flex-1 p-3 bg-white text-black rounded-l-lg focus:outline-none"
          />
          <button className="bg-white text-[#402049] !font-bold !px-6 !rounded-r-lg hover:bg-gray-200 transition-all">
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
