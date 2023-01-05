import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { postUserLoginData } from '../services/apidata';
import { useGetLoginApiQuery } from '../redux';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

import '../styles/signin.css';

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (localStorage.getItem('Token')) {
      navigate('/user/profile');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await postUserLoginData(email, password);
    if (data.body) {
      // le parametre de setLogin ici est le action.payload
      dispatch(setLogin(data.body.token));
      navigate('/user/profile');
    } else {
      alert('error');
    }
  };

  // const { loginApiQuery } = useGetLoginApiQuery();
  // console.log(loginApiQuery);

  // const login = async (e) => {
  //   e.preventDefault();
  //   await postUserLoginData(email, password);
  //   // 'Token' est récupéré depuis le localStorage (voir getUserLoginData() dans apidata.js)
  //   if (localStorage.getItem('Token')) {
  //     navigate('/user/profile');
  //   } else {
  //     alert('Vos identifiants de connexion sont incorrects');
  //   }
  // };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="content">
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={handleEmailChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={handlePasswordChange} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};
