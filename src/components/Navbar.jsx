import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ArgentBankLogo from '../assets/argentBankLogo.png';
import { setLogout } from '../services/loginSlice';
import '../styles/navbar.css';

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = useSelector((state) => state.login.connected);

  const signOut = () => {
    navigate('/user/login');
    // permet de mettre à jour le Token dans App.js
    // window.dispatchEvent(new Event('storage'));
    dispatch(setLogout(logOut));
  };

  const signIn = () => {
    navigate('/user/login');
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {/* si j'ai un Token dans mon localStorage alors affiche sign out sinon affiche sign in */}
        {localStorage.getItem('Token') ? (
          <div className="main-nav-item" onClick={() => signOut()}>
            <i className="fa fa-user-circle"></i>Sign Out
          </div>
        ) : (
          <div className="main-nav-item" onClick={() => signIn()}>
            <i className="fa fa-user-circle"></i>Sign In
          </div>
        )}
      </div>
    </nav>
  );
};
