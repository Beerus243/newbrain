"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Contact.module.css";
import Footer from "../components/Footer";

const Contact = () => {
  const [contactType, setContactType] = useState<"personal" | "enterprise">("personal");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire (ex: appel API)
    console.log("Données du formulaire :", formData);
    alert("Votre message a été envoyé !");
    // Réinitialisation du formulaire
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      message: ""
    });
  };

  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Contactez-nous</h1>

      <div className={styles.switcher}>
        <button
          className={`${styles.switchButton} ${contactType === "personal" ? styles.active : ""}`}
          onClick={() => setContactType("personal")}
        >
          Personnel
        </button>
        <button
          className={`${styles.switchButton} ${contactType === "enterprise" ? styles.active : ""}`}
          onClick={() => setContactType("enterprise")}
        >
          Entreprise
        </button>
      </div>

      <div className={styles.contactWrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {contactType === "personal" && (
            <>
              <div className={styles.fieldGroup}>
                <label htmlFor="firstName">Prénom :</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="lastName">Nom :</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </>
          )}

          {contactType === "enterprise" && (
            <div className={styles.fieldGroup}>
              <label htmlFor="companyName">Nom de l'entreprise :</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className={styles.fieldGroup}>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="phone">Téléphone :</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Envoyer le message
          </button>
        </form>

        <div className={styles.imageContainer}>
          <Image
            src="/image/informatique.png"
            alt="Illustration Informatique"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
