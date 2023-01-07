import React from 'react';
// import { useState } from 'react';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { getUserProfileData } from '../services/apidata';
import { Loader } from '../components/Loader';
import { EditName } from '../components/EditName';
import { useSelector, useDispatch } from 'react-redux';
import { userDataSlice } from '../redux';

export const User = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  // const [userData, setUserData] = useState();
  // const [error, setError] = useState();

  const token = useSelector((state) => {
    return state.login.token;
  });

  // const fetchUserData = (token) => {
  //   getUserProfileData(token)
  //     .then((data) => setUserData(data))
  //     .catch(setError);
  // };
  const fetchUserData = (token) => {
    getUserProfileData(token)
      .then((data) => dispatch(userDataSlice.actions.fetchUserDataSuccess(data)))
      .catch(() => dispatch(userDataSlice.actions.fetchUserDataError()));
  };

  React.useEffect(() => {
    fetchUserData(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // console.log(userData?.firstName);

  // if (error) {
  //   return <div>Pas de data</div>;
  // }

  console.log(userDataSlice);

  return (
    <>
      <div className="content">
        <Navbar />
        {userData ? (
          <main className="main bg-dark">
            <div className="header">
              <h1>
                Welcome back
                <br />
                {userData.firstName + ' ' + userData.lastName + '!'}
              </h1>
              <EditName firstName={userData.firstName} lastName={userData.lastName} onSave={() => fetchUserData(token)} />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
          </main>
        ) : (
          <Loader />
        )}
        <Footer />
      </div>
    </>
  );
};
