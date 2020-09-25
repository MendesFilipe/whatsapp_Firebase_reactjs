import React, { useState, useEffect } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import avatar from './assets/avatar.png';

import ChartListItem from './components/chatListemItem/ChartListItem';
import ChatIntro from "./components/chatIntro/ChatIntro";
import ChatWindow from "./components/chatWindow/ChatWindow";

import './App.css';

export default () => {
  const [chatlist, setChartList] = useState([
    {chatId: 1, title: "Fulano de Tal", image: avatar},
    {chatId: 2, title: "Fulano de Tal", image: avatar},
    {chatId: 3, title: "Fulano de Tal", image: avatar},
    {chatId: 4, title: "Fulano de Tal", image: avatar}
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src={avatar}
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
            <ChartListItem key={key} data={item} active={activeChat.chatId === chatlist[key].chatId} onClick={()=> setActiveChat(chatlist[key])} />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && 
          <ChatWindow />
        }
        {activeChat.chatId === undefined && 
          <ChatIntro />
        }
      </div>
    </div>
  );
};
