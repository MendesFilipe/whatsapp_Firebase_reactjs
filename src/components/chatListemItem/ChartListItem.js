import React from "react";
import "./ChartListItem.css";

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://lh3.googleusercontent.com/proxy/YMFeBxtDJEnz4Dpk0HBNQRtLMxDJpkXcpi84Q2x0VLqNe6xcfr9mnVxTemcBj-_X7oSElIpwCkHoJKJwpkxBJCXhuUOZ2C4mzFxfnlsvYcRO3Q" alt=""/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">
                        Filipe Mendes
                    </div>
                    <div className="chatListItem--date">
                        19:00
                    </div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}