import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { setLogout, setStayLoggedIn } from './redux';

import { Homepage } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { User } from './pages/User';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.login.connected);

  // Solution avant d'implémenter Redux :
  // const [token, setToken] = useState(localStorage.getItem('Token'));

  useEffect(() => {
    if (localStorage.getItem('Token')) {
      dispatch(setStayLoggedIn());
    } else {
      dispatch(setLogout());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user/login" element={<SignIn />} />
        {/* Solution avant d'implémenter Redux : */}
        {/* user/login sera accessible seulement si il n'y a pas de token actif et inversement*/}
        {/* {token ? <Route path="/user/profile" element={<User />} /> : <Route path="/user/login" element={<SignIn />} />} */}
        <Route path="/user/profile" element={isLogged ? <User /> : <Navigate to="/user/login" />} />
      </Routes>
    </div>
  );
};

export default App;
