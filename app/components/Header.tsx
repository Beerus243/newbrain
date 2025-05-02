"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Hook pour récupérer le chemin courant

  // Définition des liens de navigation (sans sous-labels)
  const navLinks: { label: string; href: string }[] = [
    { label: "Accueil", href: "/" },
    { label: "Nos formations", href: "/Formation" },
    { label: "A propos", href: "/#about" },
  ];

  return (
    <header className="!fixed flex justify-center w-full top-5 !px-5 !z-11">
      <div
        className={
          "w-full !p-3 flex m-5 relative !px-5 h-fit items-center rounded-4xl bg-gray-500 !border-black !border-1 !z-[1000] max-md:justify-between opacity-93 transition-all duration-300"
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
          className={`flex !gap-5 justify-end w-full !px-5 max-md:fixed max-md:flex-col z-20 transition-all max-md:w-full left-0 max-md:bg-gray-500 max-md:!p-5 ${
            menuOpen ? " max-md:top-18" : "max-md:top-[-300px]"
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
