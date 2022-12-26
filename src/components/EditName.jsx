import React from 'react';
import { useState } from 'react';
import { updateProfileData } from '../services/apidata';

export const EditName = (props) => {
  const [error, setError] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [isShown, setIsShown] = useState(false);

  const closeComponent = () => {
    // toggle shown state
    setIsShown(!isShown);
  };

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

  return (
    <>
      <button className="edit-button" onClick={closeComponent}>
        Edit Name
      </button>
      {isShown && (
        <div className="edit-container">
          <div className="name-container">
            <input className="firstName" type={'text'} placeholder={props.firstName} onChange={changeFirstName}></input>
            <input className="lastName" type={'text'} placeholder={props.lastName} onChange={changeLastName}></input>
          </div>
          <div className="buttons-container">
            <button type="button" onClick={saveNames}>
              Save
            </button>
            <button type="button" onClick={closeComponent}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
