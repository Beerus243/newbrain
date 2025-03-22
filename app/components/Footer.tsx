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
  FaFacebook,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerCta}>
        <div className={styles.singleCta}>
          <FaMapMarkerAlt className={styles.icon} />
          <div className={styles.ctaText}>
            <h4>Find us</h4>
            <span>1010 Avenue, sw 54321, chandigarh</span>
          </div>
        </div>
        <div className={styles.singleCta}>
          <FaPhone className={styles.icon} />
          <div className={styles.ctaText}>
            <h4>Call us</h4>
            <span>9876543210 0</span>
          </div>
        </div>
        <div className={styles.singleCta}>
          <FaEnvelopeOpen className={styles.icon} />
          <div className={styles.ctaText}>
            <h4>Mail us</h4>
            <span>mail@info.com</span>
          </div>
        </div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerWidget}>
          <div className={styles.footerLogo}>
            <Link href="/" legacyBehavior>
              <a>
                <Image
                  src="/image/logo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                />
              </a>
            </Link>
          </div>
          <div className={styles.footerText}>
            <p>
              Newbrain est un cabinet de conseil spécialisé en intelligence
              artificielle. Nous proposons des formations en intelligence
              artificielle ainsi que des prestations d'audit et de conseil pour
              décupler la productivité des entreprises..
            </p>
          </div>
          <div className={styles.footerSocialIcon}>
            <span>Follow us</span>
            <Link href="#" legacyBehavior>
              <a>
                <FaFacebook className={styles.facebookBg} />
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a>
                <FaTwitter className={styles.twitterBg} />
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a>
                <FaGooglePlusG className={styles.googleBg} />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.footerWidget}>
          <div className={styles.footerWidgetHeading}>
            <h3>Useful Links</h3>
          </div>
          <ul>
            <li>
              <Link href="#" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Nos services</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerWidget}>
          <div className={styles.footerWidgetHeading}>
            <h3>Subscribe</h3>
          </div>
          <div className={`${styles.footerText} mb-25`}>
            <p>
              Don’t miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
          </div>
          <div className={styles.subscribeForm}>
            <form action="#">
              <input type="text" placeholder="Email Address" />
              <button>
                <FaTelegramPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.copyrightArea}>
        <div className={styles.copyrightText}>
          <p>
            Copyright &copy; 2023, All Right Reserved{" "}
            <Link href="#" legacyBehavior>
              <a>Company Name</a>
            </Link>
          </p>
        </div>
        <div className={styles.footerMenu}>
          <ul>
            <li>
              <Link href="#" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Terms</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Privacy</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Policy</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
