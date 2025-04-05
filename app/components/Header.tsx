"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navLinks: { label: string; href: string }[] = [
    { label: "accueil", href: "/" },
    { label: "formation ai", href: "/Formation" },
    { label: "audit et consulting", href: "/" },
    { label: "ressource", href: "/" },
  ];

  return (
    <header className="!fixed flex justify-center w-full top-5 !px-5 !z-11">
      <div
        className={
          "w-full p-5 flex m-5 relative  !px-5 h-fit items-center rounded-lg max-w-5xl bg-[#333333d7] !z-[1000] max-md:justify-between"
        }
      >
        <Link href="/" legacyBehavior onClick={() => setMenuOpen(false)}>
          <Image src="/image/logo.png" alt="Logo" width={80} height={80} />
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
            menuOpen ? "max-md:top-28" : "max-md:top-[-300]"
          }`}
        >
          <nav className="flex md:bg-[#444] !rounded-md !px-5 !py-4 !gap-5 max-md:flex-col max-md:!p-0">
            {navLinks.map((link) => {
              return (
                <Link
                  className="!text-white hover:!text-[#ff6600] transition-all"
                  onClick={() => setMenuOpen(!menuOpen)}
                  key={link.label}
                  href={link.href}
                >
                  {link.label.toUpperCase()}
                </Link>
              );
            })}
          </nav>
          <Link
            href={"contact"}
            className="!bg-[#ff6600] !rounded-md !h-fit !text-white !p-3  cursor-pointer flex items-center"
          >
            Prendre un rendez-vous
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
