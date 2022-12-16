import '../styles/navbar.css';
import { Link } from 'react-router-dom';

import ArgentBankLogo from '../assets/argentBankLogo.png';
import '../styles/navbar.css';

export const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {/* visible seulement si on a pas de token dans le localStorage */}
        {/* ternaire si j'ai un Token dans mon localStorage alors affiche sign out sinon affiche sign in */}
        <Link to="/user/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>Sign In
        </Link>
      </div>
    </nav>
  );
};
