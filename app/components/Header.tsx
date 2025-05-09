"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";
import router from "next/router";

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Hook pour récupérer le chemin courant

  // Définition des liens de navigation
  const navLinks: { label: string; href: string }[] = [
    { label: "Accueil", href: "/" },
    { label: "Nos formations", href: "/Formation" },
    { label: "A propos", href: "/#about" },
  ];

  return (
    <header className="!fixed flex justify-center max-md:w-screen !w-full top-5 !px-5 !z-11">
      <div
        className={
          "w-full !p-3 flex m-5 !px-5 h-fit items-center rounded-4xl bg-gray-500 border-black border-1 !z-[1000] max-md:justify-between transition-all duration-300"
        }
      >
        {/* Logo */}
        <Link href="/" legacyBehavior onClick={() => setMenuOpen(false)}>
          <Image src="/image/logo.png" alt="Logo" width={100} height={100} />
        </Link>

        {/* Bouton Hamburger pour la version mobile */}
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

        {/* Overlay pour le menu responsive */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="md:hidden fixed h-screen w-screen top-0 left-0 z-10"
          ></div>
        )}

        {/* Menu responsive */}
        <div
          className={`!fixed top-0 left-0 w-full h-full bg-gray-800 text-white z-50 flex flex-col transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo en haut à gauche */}
          <div className="flex justify-between items-center w-full !pb-9 !px-5 !py-3 border-b border-gray-600">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src="/image/logo.png"
                alt="Logo"
                width={140}
                height={140}
              />
            </Link>

            {/* Bouton pour fermer le menu */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white !text-3xl"
            >
              <RiCloseLargeLine />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col !ml-5 !gap-4 w-full !mt-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // Vérifie si le chemin actuel correspond au lien
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full text-start !py-4 max-md:!border-b max-md:!border-gray-600 text-lg font-bold transition-all ${
                    isActive ? "!text-black animate-pulse" : "!hover:text-black"
                  }`}
                >
                  {link.label.toUpperCase()}
                </Link>
              );
            })}
            <button
              onClick={() => router.push("/contact")}
              className={
                "!bg-black !rounded-lg  !w-[90%] !justify-center !text-white !p-3 cursor-pointer !flex !items-center hover:!bg-white hover:!text-black hover:!border-black !border-2 !border-transparent transition-all duration-300 ease-in-out transform hover:scale-102 !mt-7"
              }
            >
              Prenez rendez-vous
            </button>
          </nav>

          {/* Icônes des réseaux sociaux */}
          <div className="flex left gap-4 !mt-14 !ml-5 !mb-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white !text-3xl hover:text-yellow-400 transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white !text-3xl hover:text-yellow-400 transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white !text-3xl hover:text-yellow-400 transition-all"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Navigation pour la version PC */}
        <div
          className={`flex !gap-5 justify-end w-full !px-5 max-md:fixed max-md:flex-col z-20 transition-all max-md:w-[99%] max-md:h-full left-0 max-md:bg-gray-500 max-md:!p-5 ${
            menuOpen ? " max-md:top-0" : "max-md:top-[-100%]"
          }`}
        >
          <nav className="flex !px-5 !py-4 !gap-5 max-md:flex-col max-md:!p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // Vérifie si le chemin actuel correspond au lien
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-all cursor-pointer ${
                    isActive
                      ? "!text-black !font-bold animate-pulse"
                      : "!text-white hover:!text-black"
                  }`}
                >
                  {link.label.toUpperCase()}
                </Link>
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
