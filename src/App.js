import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { User } from './pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/login" element={<SignIn />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/user/profile" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
