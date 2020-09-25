import React from "react";
import logo from '../../assets/logoWhatsapp.jpg';
import "./ChatIntro.css"

export default () => {
    return (
        <div className="chatIntro">
            <img src={logo} alt="" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WharsApp conecta ao seu telefone para sincronixar suas mensagens. <br/> Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</h2>
        </div>
    )
}