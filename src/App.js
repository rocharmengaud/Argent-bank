import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Home';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
