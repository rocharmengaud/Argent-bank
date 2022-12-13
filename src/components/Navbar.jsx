import '../styles/navbar.css';
import { Link } from 'react-router-dom';

import ArgentBankLogo from '../assets/argentBankLogo.png';

export const Navbar = () => {
  return (
    <nav class="main-nav">
      <Link to="/" class="main-nav-logo">
        <img class="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/sign-in" class="main-nav-item">
          <i class="fa fa-user-circle"></i>Sign in
        </Link>
      </div>
    </nav>
  );
};
