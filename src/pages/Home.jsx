import React from 'react';
// import { getUserLoginData, getUserProfileData } from '../services/apidata';

import '../styles/main.css';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import BankTree from '../assets/bank-tree.jpeg';
import { Footer } from '../components/Footer';
import { Features } from '../components/Features';

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero img={BankTree} />
        <Features />
      </main>
      <Footer />
    </>
  );
};
