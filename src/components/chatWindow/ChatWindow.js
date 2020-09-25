import React from "react";
import avatar from '../../assets/avatar.png';

import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./ChatWindow.css"

export default () => {
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src={avatar} alt="" />
                    <div className="chatWindow--name">Filipe Mendes</div>
                </div>

                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: "#919191"}} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: "#919191"}} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: "#919191"}} />
                    </div>
                </div>

            </div>
            <div className="chatWindow--body">

            </div>
            <div className="chatWindow--footer">

            </div>
        </div>
    );
}