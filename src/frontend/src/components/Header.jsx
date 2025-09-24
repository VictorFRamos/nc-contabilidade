import React from "react";
import { Link } from "react-router-dom";
import "./../assets/css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">NC Contabilidade Ltda</div>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#plans">Planos</a>
        <Link to="/login" className="login-btn">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
