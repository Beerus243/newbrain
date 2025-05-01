import React from "react";
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
  return (
    <footer className="bg-gradient-to-r from-[#151f2b] via-[#402049] to-[#000000] text-white !py-10">
      {/* Animation des étoiles filantes */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Génération d'étoiles */}
          {[...Array(30)].map((_, index) => (
            <div
              key={index}
              className="shooting-star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Section Contact */}
      <div className="max-w-7xl !mx-auto !px-6 grid grid-cols-1 md:grid-cols-3 !gap-8 !border-b !border-gray-700 !pb-6">
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
      <div className="max-w-7xl !mx-auto !px-6 !mt-10 grid grid-cols-1 md:grid-cols-4 !gap-8">
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
