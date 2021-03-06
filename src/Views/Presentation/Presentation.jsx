import React from 'react';

import './Presentation.css';

import profilePic from '../../img/profileBG.png';

export default function Presentation() {
  return (
    <div className="presentationContainer">
      <img className="profilePic" src={profilePic} alt="this is Jorge Gonçalves profile" />
      <div className="presentationText">
        <h1 className="uk-heading-small">Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
