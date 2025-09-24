import React from "react";
import "./../assets/css/Banner.css";

function Banner() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>NC Contabilidade 100% Digital</h1>
        <p>Atendemos empresas de serviços e e-commerce em todo o Brasil com agilidade, segurança e inovação.</p>
        <a href="#plans" className="hero-button">Conhecer Planos</a>
      </div>
    </section>
  );
}

export default Banner;
