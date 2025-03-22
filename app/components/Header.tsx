"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
// import styles from "./Header.module.css";

// const Navigation: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState<boolean>(false);

//   const toggleMenu = () => setMenuOpen((prev) => !prev);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav
//       className={styles.navbar}
//       role="navigation"
//       aria-label="Main Navigation"
//     >
//       <div className={styles.navContainer}>
//         {/* Logo à gauche */}
//         <div className={styles.navLeft}>
//           <Link href="/" legacyBehavior>
//             <a onClick={closeMenu}>
//               <Image src="/image/logo.png" alt="Logo" width={80} height={80} />
//             </a>
//           </Link>
//         </div>

//         {/* Menu central pour les écrans larges */}
//         <div className={styles.navMiddle}>
//           <ul className={styles.navMenu}>
//             <li className={styles.navItem}>
//               <Link href="/" legacyBehavior>
//                 <a onClick={closeMenu}>Accueil</a>
//               </Link>
//             </li>
//             <li className={styles.navItem}>
//               <Link href="/Formation" legacyBehavior>
//                 <a onClick={closeMenu}>Formation AI</a>
//               </Link>
//             </li>
//             <li className={styles.navItem}>Audit et Consulting</li>
//             <li className={styles.navItem}>Ressource</li>
//           </ul>
//         </div>

//         {/* Section droite : bouton et hamburger */}
//         <div className={styles.navRight}>
//           <Link href="/contact" legacyBehavior>
//             <a
//               className={`${styles.navButton} ${styles.navButtonPrimary}`}
//               onClick={closeMenu}
//             >
//               Prendre un rendez-vous
//             </a>
//           </Link>

//           {/* Bouton hamburger pour les écrans mobiles */}
//           <div className={styles.hamburger} onClick={toggleMenu}>
//             <div></div>
//             <div></div>
//             <div></div>
//           </div>
//         </div>
//       </div>

//       {/* Menu mobile déroulant */}
//       <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
//         <ul className={styles.mobileNavMenu}>
//           <li className={styles.navItem}>
//             <Link href="/" legacyBehavior>
//               <a onClick={closeMenu}>Accueil</a>
//             </Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/Formation" legacyBehavior>
//               <a onClick={closeMenu}>Formation AI</a>
//             </Link>
//           </li>
//           <li className={styles.navItem}>Audit et Consulting</li>
//           <li className={styles.navItem}>Ressource</li>
//           <li className={styles.navItem}>
//             <Link href="/contact" legacyBehavior>
//               <a className={styles.navButton} onClick={closeMenu}>
//                 Prendre un rendez-vous
//               </a>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navLinks: { label: string; href: string }[] = [
    { label: "accueil", href: "/" },
    { label: "formation ai", href: "/Formation" },
    { label: "audit et consulting", href: "/" },
    { label: "ressource", href: "/" },
  ];

  return (
    <header className="!fixed flex justify-center w-full top-5 !px-5">
      <div
        className={
          "w-full p-5 flex m-5 !px-5 h-fit items-center rounded-lg bg-[#333333d7] !z-[10000] max-md:justify-between"
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

        <div
          className={`flex !gap-5 justify-end w-full !px-5 max-md:fixed max-md:flex-col transition-all max-md:w-full left-0 max-md:bg-[#000000e5] max-md:!p-5 ${
            menuOpen ? "max-md:top-28" : "max-md:top-[-300]"
          }`}
        >
          <nav className="flex md:bg-[#444] !px-5 !py-3 !gap-5 max-md:flex-col max-md:!p-0">
            {navLinks.map((link) => {
              return (
                <Link
                  className="!text-white hover:!text-yellow-600 transition-all"
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
            className="!bg-orange-400 !rounded-md !h-fit !text-white !p-3 hover:!font-semibold cursor-pointer flex items-center"
          >
            prendre un rendez-vous
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
