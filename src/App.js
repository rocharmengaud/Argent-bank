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
  // This useSelector takes the entire Redux store state as an argument and returns the value of the connected property of the login slice of the state.
  // The value returned by the selector is assigned to the isLogged constant.
  const isLogged = useSelector((state) => state.login.connected);

  // Solution avant d'implémenter Redux :
  // const [token, setToken] = useState(localStorage.getItem('Token'));

  // The effect is to check the value of the Token item in local storage and dispatch a Redux action based on its value.
  // The array only contains the dispatch function, so the effect will only be run once, when the component mounts.
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
        {/* setting up a route that can only be accessed by a logged-in user. 
        If the user is not logged in, they will be redirected to the /user/login route. */}
        <Route path="/user/profile" element={isLogged ? <User /> : <Navigate to="/user/login" />} />
      </Routes>
    </div>
  );
};

export default App;
