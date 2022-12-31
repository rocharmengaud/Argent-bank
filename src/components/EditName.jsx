import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createToggle } from '../redux';

import { updateProfileData } from '../services/apidata';
import '../styles/editname.css';

export const EditName = (props) => {
  const toggle = useSelector((state) => state);
  const dispatch = useDispatch();

  const [error, setError] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  // const [isShown, setIsShown] = useState(false);

  // const toggleComponent = () => {
  //   // toggle shown state
  //   setIsShown(!isShown);
  // };

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const saveNames = () => {
    // Ici l'error va se set uniquement si on rencontre l'erreur 400 || 500, voir apiData.js
    updateProfileData(firstName, lastName).then((error) => setError(error));
    props.onSave();
  };

  if (error) {
    return <div>{error}</div>;
  }

  console.log(toggle.editName.active);

  return (
    <>
      {/* <button className="edit-button" onClick={toggleComponent}> */}
      <button className="edit-button" onClick={() => dispatch(createToggle())}>
        Edit Name
      </button>
      {toggle.editName.active && (
        <div className="edit-container">
          <div className="first-container">
            <input className="firstName" type={'text'} placeholder={props.firstName} onChange={changeFirstName}></input>
            <button type="button" onClick={saveNames}>
              Save
            </button>
          </div>
          <div className="second-container">
            <input className="lastName" type={'text'} placeholder={props.lastName} onChange={changeLastName}></input>
            {/* <button type="button" onClick={toggleComponent}> */}
            <button type="button" onClick={() => dispatch(createToggle())}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
