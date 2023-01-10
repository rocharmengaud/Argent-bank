import React from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Features } from '../components/Features';

import BankTree from '../assets/bank-tree.jpeg';
import '../styles/main.css';
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
