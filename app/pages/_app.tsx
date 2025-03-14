import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import 'animate.css/animate.min.css'; // Importez les styles d'animation
import '../styles/globals.css'; // Importez vos styles globaux
import WOW from 'wow.js'; // Importez WOW.js

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new WOW().init(); // Initialisez WOW.js
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;