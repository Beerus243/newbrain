import Image from "next/image";
import React from "react";
import Header from './components/Header';
import styles from './components/Header.module.css';
import Body from "./components/body";

const Homepage = () => (
  <div>
    <Header />
    <Body />
  </div>
);

export default Homepage;

