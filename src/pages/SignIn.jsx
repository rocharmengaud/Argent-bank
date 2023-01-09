import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { postUserLoginData } from '../services/apidata';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../redux';
import { setEmail, setPassword } from '../redux';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

import '../styles/signin.css';

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const email = useSelector((state) => state.credentials.email);
  const password = useSelector((state) => state.credentials.password);

  useEffect(() => {
    if (localStorage.getItem('Token')) {
      navigate('/user/profile');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let loginData = await postUserLoginData(email, password);
    if (loginData.body) {
      // le parametre de setLogin ici est le action.payload
      dispatch(setLogin(loginData.body.token));
      navigate('/user/profile');
    } else {
      alert('error');
    }
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
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
