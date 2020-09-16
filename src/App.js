import React from 'react';
import './App.css';

export default () => {
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src="https://lh3.googleusercontent.com/proxy/YMFeBxtDJEnz4Dpk0HBNQRtLMxDJpkXcpi84Q2x0VLqNe6xcfr9mnVxTemcBj-_X7oSElIpwCkHoJKJwpkxBJCXhuUOZ2C4mzFxfnlsvYcRO3Q"
            alt="avatar"
          />
          <div className="header--buttons">
            ...
          </div>
        </header>

        <div className="search">...</div>

        <div className="chatlist">...</div>
      </div>
      <div className="contentarea">...</div>
    </div>
  );
};
