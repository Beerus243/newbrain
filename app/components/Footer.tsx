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
  FaTelegramPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="!text-2xl text-[#5E17EB]" />,
    title: "Find us",
    description: "1010 Avenue, SW 54321, Chandigarh",
  },
  {
    icon: <FaPhone className="!text-2xl text-[#5E17EB]" />,
    title: "Call us",
    description: "9876543210",
  },
  {
    icon: <FaEnvelopeOpen className="!text-2xl text-[#5E17EB]" />,
    title: "Mail us",
    description: "mail@info.com",
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaGooglePlusG />, href: "#" },
];

const usefulLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Nos services", href: "#" },
  { label: "Contact us", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#151f2b] via-[#402049] to-[#000000] text-white !py-10">
      {/* Section Contact */}
      <div className="max-w-7xl !mx-auto !px-6 grid grid-cols-1 md:grid-cols-3 !gap-8">
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
      <div className="max-w-7xl !mx-auto !px-6 !mt-10 grid grid-cols-1 md:grid-cols-3 !gap-8">
        {/* Logo et description */}
        <div>
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="!mb-4"
          />
          <p className="!text-sm text-gray-300">
            Newbrain est un cabinet de conseil spécialisé en intelligence
            artificielle. Nous proposons des formations en intelligence
            artificielle ainsi que des prestations d'audit et de conseil pour
            décupler la productivité des entreprises.
          </p>
          <div className="flex !items-center !gap-4 !mt-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} legacyBehavior>
                <a className="!text-[#5E17EB] hover:!text-white">
                  {link.icon}
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="!text-lg !font-bold !mb-4">Useful Links</h3>
          <ul className="!space-y-2">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} legacyBehavior>
                  <a className="!text-sm text-gray-300 hover:!text-white">
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Formulaire d'inscription */}
        <div>
          <h3 className="!text-lg !font-bold !mb-4">Subscribe</h3>
          <p className="!text-sm text-gray-300 !mb-4">
            Don’t miss to subscribe to our new feeds, kindly fill the form
            below.
          </p>
          <form className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="!flex-1 !p-3 !rounded-l-lg !text-black focus:!outline-none"
            />
            <button className="!bg-[#5E17EB] !text-white !px-4 !rounded-r-lg hover:!bg-[#4a14c1] transition-all">
              <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>

      {/* Section Copyright */}
      <div className="!border-t !border-gray-700 !mt-10 !pt-6">
        <div className="max-w-7xl !mx-auto !px-6 flex flex-col md:flex-row !justify-between !items-center">
          <p className="!text-sm text-gray-300">
            Copyright &copy; 2023, All Right Reserved{" "}
            <Link href="#" legacyBehavior>
              <a className="!text-[#5E17EB] hover:!text-white">Company Name</a>
            </Link>
          </p>
          <ul className="flex !space-x-4 !mt-4 md:!mt-0">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} legacyBehavior>
                  <a className="!text-sm text-gray-300 hover:!text-white">
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
