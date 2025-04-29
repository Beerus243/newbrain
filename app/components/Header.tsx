"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // Gère l'état des menus déroulants
  const pathname = usePathname(); // Hook pour récupérer le chemin courant

  // Définition des liens de navigation
  const navLinks: {
    label: string;
    href: string;
    subLinks?: { label: string; href: string }[];
  }[] = [
    { label: "Accueil", href: "/" },
    {
      label: "Nos formations",
      href: "/Formation",
      subLinks: [
        { label: "A propos", href: "/Apropos" },
        { label: "Nos news", href: "/News" },
        { label: "Formation", href: "/Formation" },
        { label: "Coaching", href: "/Coaching" },
      ],
    },
    {
      label: "Nos ressources",
      href: "/Client",
      subLinks: [
        { label: "A propos", href: "/Apropos" },
        { label: "Nos news", href: "/News" },
        { label: "Formation", href: "/Formation" },
        { label: "Coaching", href: "/Coaching" },
      ],
    },
    { label: "A propos", href: "/Apropos" },
  ];

  return (
    <header className="!fixed flex justify-center w-full top-5 !px-5 !z-11">
      <div
        className={
          "w-full !p-3 flex m-5 relative !px-5 h-fit items-center rounded-4xl max-w-7xl bg-gray-500 !border-black !border-1 !z-[1000] max-md:justify-between opacity-93 transition-all duration-300"
        }
      >
        <Link href="/" legacyBehavior onClick={() => setMenuOpen(false)}>
          <Image src="/image/logo.png" alt="Logo" width={100} height={100} />
        </Link>

        <span
          className="md:hidden !text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <RiCloseLargeLine size={30} />
          ) : (
            <RxHamburgerMenu size={30} />
          )}
        </span>

        {menuOpen && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden fixed h-screen w-screen top-0 left-0 z-10"
          ></div>
        )}

        <div
          className={`flex !gap-5 justify-end w-full !px-5 max-md:fixed max-md:flex-col z-20 transition-all max-md:w-full left-0 max-md:bg-[#000000e5] max-md:!p-5 ${
            menuOpen ? "max-md:top-28" : "max-md:top-[-300px]"
          }`}
        >
          <nav className="flex !px-5 !py-4 !gap-5 max-md:flex-col max-md:!p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // Vérifie si le chemin actuel correspond au lien
              return (
                <div key={link.label} className="relative group">
                  {/* Lien principal avec flèche */}
                  <button
                    className={`flex items-center gap-2 transition-all cursor-pointer ${
                      isActive
                        ? "!text-black !font-bold animate-pulse"
                        : "!text-white hover:!text-black"
                    }`}
                  >
                    {link.label.toUpperCase()}
                    {link.subLinks && (
                      <span className="transform transition-transform group-hover:rotate-180">
                        ▼
                      </span>
                    )}
                  </button>

                  {/* Sous-menus */}
                  {link.subLinks && (
                    <div className="absolute top-full left-0 bg-gray-500 text-black !rounded-xl !shadow-lg !p-7 z-20 min-w-[200px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transform translate-y-2 transition-all duration-300">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 hover:text-white rounded transition-all duration-200 cursor-pointer"
                        >
                          {/* Emoji ajouté */}
                          {subLink.label === "A propos" && "ℹ️"}
                          {subLink.label === "Nos news" && "📰"}
                          {subLink.label === "Formation" && "📚"}
                          {subLink.label === "Coaching" && "🎯"}
                          <span>{subLink.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <Link
            href={"/contact"}
            onClick={() => setMenuOpen(false)}
            className="!bg-black !rounded-3xl !w-60 justify-center !text-white cursor-pointer !flex !items-center hover:!bg-white hover:!text-black hover:!border-black !border-2 !border-transparent transition-all duration-300 ease-in-out transform hover:scale-102"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
