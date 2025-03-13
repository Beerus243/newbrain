// components/Footer.tsx
import Link from "next/link";
import { FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white pt-8">
      {/* Forme de wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.6,22,103,29.67,158,19.11,70.21-14.82,136.39-48,206-48,77.47,0,146,32.85,222,37.85,70.75,4.76,136-16.14,206-25.85,59.84-7.87,117.69-6.66,176,6.3V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C47.42,29,103,35.75,158,30.65c70.25-7.59,136.39-34.3,206-34.3,77.47,0,146,27.06,222,31.7,70.76,4.88,136-12.43,206-19.88,59.83-6.4,117.68-5.36,176,4.8V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C47.42,14,103,21,158,16.82c70.25-6,136.39-26.88,206-26.88,77.47,0,146,20.42,222,24,70.76,3.6,136-10.25,206-16.68,59.83-5.69,117.68-4.77,176,3.19V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {/* Contenu du footer */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Bio de l'entreprise */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <p className="text-lg">
            Nous sommes une entreprise innovante dédiée à offrir la meilleure expérience digitale.
          </p>
        </div>
        {/* Logo et réseaux sociaux */}
        <div className="flex flex-col items-center md:items-end">
          <Link href="/" legacyBehavior>
            <a className="flex items-center gap-2">
              <span className="text-2xl font-bold">Mon Entreprise</span>
            </a>
          </Link>
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.youtube.com" legacyBehavior>
              <a className="hover:text-gray-200">
                <FaYoutube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
            </Link>
            <Link href="https://twitter.com" legacyBehavior>
              <a className="hover:text-gray-200">
                <FaTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </Link>
            <Link href="https://linkedin.com" legacyBehavior>
              <a className="hover:text-gray-200">
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
