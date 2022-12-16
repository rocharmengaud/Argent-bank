import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { User } from './pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* accessible seulement si il n'y a pas de token actif */}
        <Route path="/user/login" element={<SignIn />} />
        <Route path="/" element={<Homepage />} />
        {/* accessible si l'utilisateur a un token actif dans le localStorage */}
        <Route path="/user/profile" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
