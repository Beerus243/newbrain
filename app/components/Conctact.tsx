import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Image src="/path/to/your/image.jpg" alt="Contact Image" width={800} height={400} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 45%', margin: '10px' }}>
          <h2>Contact Entreprise</h2>
          <form>
            <div>
              <label htmlFor="companyName">Nom de l'entreprise:</label>
              <input type="text" id="companyName" name="companyName" required />
            </div>
            <div>
              <label htmlFor="companyEmail">Email:</label>
              <input type="email" id="companyEmail" name="companyEmail" required />
            </div>
            <div>
              <label htmlFor="companyPhone">Téléphone:</label>
              <input type="tel" id="companyPhone" name="companyPhone" required />
            </div>
            <div>
              <label htmlFor="companyMessage">Message:</label>
              <textarea id="companyMessage" name="companyMessage" required></textarea>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div style={{ flex: '1 1 45%', margin: '10px' }}>
          <h2>Contact Personnel</h2>
          <form>
            <div>
              <label htmlFor="personalName">Nom:</label>
              <input type="text" id="personalName" name="personalName" required />
            </div>
            <div>
              <label htmlFor="personalEmail">Email:</label>
              <input type="email" id="personalEmail" name="personalEmail" required />
            </div>
            <div>
              <label htmlFor="personalPhone">Téléphone:</label>
              <input type="tel" id="personalPhone" name="personalPhone" required />
            </div>
            <div>
              <label htmlFor="personalMessage">Message:</label>
              <textarea id="personalMessage" name="personalMessage" required></textarea>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;