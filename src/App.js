import React, { useState, useEffect } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChartListItem from './components/ChartListItem';

import './App.css';

export default () => {
  const [chatlist, setChartList] = useState([{}, {}, {}, {}]);

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
            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar ou começar uma noca conversa" />
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChartListItem key={key} />
          ))}
        </div>
      </div>
      <div className="contentarea">...</div>
    </div>
  );
};
