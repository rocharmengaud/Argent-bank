import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { User } from './pages/User';

function App() {
  const [token, setToken] = useState(localStorage.getItem('Token'));

  useEffect(() => {
    window.addEventListener('storage', () => {
      // When local storage changes, set the new 'Token'
      setToken(localStorage.getItem('Token'));
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* user/login sera accessible seulement si il n'y a pas de token actif et inversement*/}
        {token ? <Route path="/user/profile" element={<User />} /> : <Route path="/user/login" element={<SignIn />} />}
      </Routes>
    </div>
  );
}

export default App;
