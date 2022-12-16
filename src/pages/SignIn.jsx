import React, { useState } from 'react';
import { getUserLoginData } from '../services/apidata';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

import '../styles/signin.css';

export const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = async (e) => {
    e.preventDefault();
    await getUserLoginData(email, password);
    // 'Token' est récupéré depuis le localStorage (voir getUserLoginData)
    if (localStorage.getItem('Token')) {
      console.log('code ton navigate');
    } else {
      alert('Vos identifiants de connexion sont incorrects');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <body>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={login}>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" onChange={handleEmailChange} />
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" onChange={handlePasswordChange} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </body>
  );
};
