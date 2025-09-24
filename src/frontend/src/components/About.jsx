import React from "react";
import "./../assets/css/About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>Sobre a NC Contabilidade</h2>
      <p className="about-text">
        A <strong>NC Contabilidade Ltda – Unidade II</strong> nasce como extensão do Escritório Nacional,
        oferecendo <b>contabilidade 100% digital</b> com foco em empresas prestadoras de serviços, 
        e-commerce e estudo de viabilidade empresarial, atendendo clientes em todo o Brasil.
      </p>

      <h3>Sócios-Administradores</h3>
      <div className="about-cards">
        <div className="about-card">
          <h4>Mateus Fernando Belluomini dos Santos</h4>
          <p>
            Advogado especializado em direito trabalhista, tributário e cível, 
            perito contábil e técnico em administração. 
            Une experiência jurídica e visão de negócios para soluções completas e seguras.
          </p>
        </div>

        <div className="about-card">
          <h4>Ivair José Alari</h4>
          <p>
            Contador e pós-graduado em perícia contábil, com ampla vivência em gestão e 
            controle fiscal, garantindo precisão, confiabilidade e inovação em todos os processos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
