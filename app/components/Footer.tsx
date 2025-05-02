"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelopeOpen,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="!text-2xl text-white" />,
    title: "Adresse",
    description: "80 Av.du Loup Pendu,69140 Rillieux-la-Pape",
  },
  {
    icon: <FaPhone className="!text-2xl text-white" />,
    title: "Phone",
    description: "9876543210",
  },
  {
    icon: <FaEnvelopeOpen className="!text-2xl text-white" />,
    title: "Email",
    description: "newbrain@gmail.com",
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaGooglePlusG />, href: "#" },
];

const Footer = () => {
  useEffect(() => {
    const container = document.getElementById("shooting-stars-container");
    const meteorCount = 30; // ajustez selon l'effet désiré

    if (container) {
      for (let i = 0; i < meteorCount; i++) {
        const star = document.createElement("div");
        star.classList.add("shooting-star");

        // paramètres aléatoires
        const startX = Math.random() * 100; // position horizontale de départ (en %)
        const delay = Math.random() * 10; // délai avant apparition (en secondes)
        const duration = 0.5 + Math.random() * 1.5; // durée du trajet (entre 0.5s et 2s)
        const length = 20 + Math.random() * 60; // longueur du trait (entre 20px et 80px)
        const opacity = 0.2 + Math.random() * 0.8; // opacité initiale

        // on assigne ces valeurs aux variables CSS
        star.style.setProperty("--start-x", `${startX}vw`);
        star.style.setProperty("--delay", `${delay}s`);
        star.style.setProperty("--duration", `${duration}s`);
        star.style.setProperty("--length", `${length}px`);
        star.style.setProperty("--opacity", opacity.toString());

        container.appendChild(star);
      }
    }
  }, []);

  return (
    <footer className="relative rounded-t-3xl bg-gradient-to-r from-[#151f2b] via-[#402049] to-[#000000] text-white !py-10">
      {/* Animation des étoiles filantes */}
      <div
        id="shooting-stars-container"
        className="absolute w-full h-full overflow-hidden"
      ></div>

      {/* Section Contact */}
      <div className="relative max-w-7xl !mx-auto !px-6 grid grid-cols-1 md:grid-cols-3 !gap-8 !border-b !border-gray-700 !pb-6 z-10">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex !items-start !gap-4">
            {info.icon}
            <div>
              <h4 className="!text-lg !font-bold">{info.title}</h4>
              <p className="!text-sm text-gray-300">{info.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section Contenu */}
      <div className="relative max-w-7xl !mx-auto !px-6 !mt-10 grid grid-cols-1 md:grid-cols-4 !gap-8">
        {/* Logo et description */}
        <div>
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="!mb-4"
          />
          <p className="!text-sm text-gray-300">
            Chez New Brain, nous ne transmettons pas que du savoir. Nous
            activons les compétences.
          </p>
          <div className="flex !items-center !gap-4 !mt-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} legacyBehavior>
                <a className="!w-10 !h-10 !flex !items-center !justify-center !border !border-white !rounded-full hover:!bg-white hover:!text-[#5E17EB] transition-all">
                  {link.icon}
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* Nos services */}
        <div>
          <h3 className="!text-lg !font-bold !mb-4">Nos services</h3>
          <ul className="!space-y-2">
            <li className="!text-sm text-gray-300 hover:!text-white">
              Acculturation IA
            </li>
            <li className="!text-sm text-gray-300 hover:!text-white">
              Formation et coaching
            </li>
            <li className="!text-sm text-gray-300 hover:!text-white">
              Programme de transformation
            </li>
          </ul>
        </div>

        {/* Nos ressources */}
        <div>
          <h3 className="!text-lg !font-bold !mb-4">Nos ressources</h3>
          <ul className="!space-y-2">
            <li className="!text-sm text-gray-300 hover:!text-white">
              À propos
            </li>
            <li className="!text-sm text-gray-300 hover:!text-white">
              Nos news IA
            </li>
            <li className="!text-sm text-gray-300 hover:!text-white">
              Formation et coaching
            </li>
            <li className="!text-sm text-gray-300 hover:!text-white">
              Gratuit
            </li>
          </ul>
        </div>

        {/* Mentions légales */}
        <div>
          <h3 className="!text-lg !font-bold !mb-4">Mentions légales</h3>
          <ul className="!space-y-2">
            <li className="!text-sm text-gray-300 hover:!text-white">Home</li>
            <li className="!text-sm text-gray-300 hover:!text-white">Terms</li>
            <li className="!text-sm text-gray-300 hover:!text-white">
              Privacy Policy
            </li>
            <li className="!text-sm text-gray-300 hover:!text-white">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
