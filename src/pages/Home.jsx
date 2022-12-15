import React, { useState } from 'react';
import { getUserLoginData } from '../services/apidata';

import '../styles/main.css';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import BankTree from '../assets/bank-tree.jpeg';
import { Footer } from '../components/Footer';
import { Features } from '../components/Features';

import iconChat from '../assets/icon-chat.png';
import iconMoney from '../assets/icon-money.png';
import iconSecurity from '../assets/icon-security.png';

export const Homepage = () => {
  const [userLoginData, setUserLoginData] = useState();

  getUserLoginData();

  React.useEffect(() => {
    getUserLoginData()
      .then((data) => setUserLoginData(data))
      .catch('error');
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero img={BankTree} />
        <Features img1={iconChat} img2={iconMoney} img3={iconSecurity} />
      </main>
      <Footer />
    </>
  );
};
