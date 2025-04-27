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

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#151f2b] via-[#402049] to-[#000000] text-white py-10">
      {/* Section Contact */}
      <div className="max-w-7xl !mx-auto !px-6 grid grid-cols-1 md:grid-cols-3 !gap-8">
        <div className="flex !items-start !gap-4">
          <FaMapMarkerAlt className="!text-2xl text-[#5E17EB]" />
          <div>
            <h4 className="text-lg !font-bold">Find us</h4>
            <p className="text-sm text-gray-300">
              1010 Avenue, SW 54321, Chandigarh
            </p>
          </div>
        </div>
        <div className="flex !items-start !gap-4">
          <FaPhone className="!text-2xl text-[#5E17EB]" />
          <div>
            <h4 className="text-lg !font-bold">Call us</h4>
            <p className="text-sm text-gray-300">9876543210</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaEnvelopeOpen className="!text-2xl text-[#5E17EB]" />
          <div>
            <h4 className="text-lg !font-bold">Mail us</h4>
            <p className="text-sm text-gray-300">mail@info.com</p>
          </div>
        </div>
      </div>

      {/* Section Contenu */}
      <div className="max-w-7xl mx-auto !px-6 !mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo et description */}
        <div>
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="mb-4"
          />
          <p className="text-sm text-gray-300">
            Newbrain est un cabinet de conseil spécialisé en intelligence
            artificielle. Nous proposons des formations en intelligence
            artificielle ainsi que des prestations d'audit et de conseil pour
            décupler la productivité des entreprises.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link href="#" legacyBehavior>
              <a className="text-[#5E17EB] hover:text-white">
                <FaFacebookF />
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="text-[#5E17EB] hover:text-white">
                <FaTwitter />
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="text-[#5E17EB] hover:text-white">
                <FaGooglePlusG />
              </a>
            </Link>
          </div>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" legacyBehavior>
                <a className="text-sm text-gray-300 hover:text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="text-sm text-gray-300 hover:text-white">About</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="text-sm text-gray-300 hover:text-white">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="text-sm text-gray-300 hover:text-white">
                  Nos services
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="text-sm text-gray-300 hover:text-white">
                  Contact us
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Formulaire d'inscription */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-300 mb-4">
            Don’t miss to subscribe to our new feeds, kindly fill the form
            below.
          </p>
          <form className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="flex-1 p-3 rounded-l-lg text-black focus:outline-none"
            />
            <button className="bg-[#5E17EB] text-white px-4 rounded-r-lg hover:bg-[#4a14c1] transition-all">
              <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>

      {/* Section Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            Copyright &copy; 2023, All Right Reserved{" "}
            <Link href="#" legacyBehavior>
              <a className="text-[#5E17EB] hover:text-white">Company Name</a>
            </Link>
          </p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <Link href="#" legacyBehavior>
                <a className="text-sm text-gray-300 hover:text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="text-sm text-gray-300 hover:text-white">Terms</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="text-sm text-gray-300 hover:text-white">
                  Privacy
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="text-sm text-gray-300 hover:text-white">Policy</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="text-sm text-gray-300 hover:text-white">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
