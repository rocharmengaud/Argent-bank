import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { User } from './pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* user/login sera accessible seulement si il n'y a pas de token actif et inversement*/}
        {localStorage.getItem('Token') ? <Route path="/user/profile" element={<User />} /> : <Route path="/user/login" element={<SignIn />} />}
      </Routes>
    </div>
  );
}

export default App;
