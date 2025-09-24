import React from "react";
import "./../assets/css/Services.css";

// Importe as imagens - você precisará baixar ou criar estas imagens
import contabilidadeImg from "./../assets/images/contabilidade-digital.jpg";
import viabilidadeImg from "./../assets/images/estudo-viabilidade.jpg";
import planejamentoImg from "./../assets/images/planejamento-estrategico.jpg";
import ecommerceImg from "./../assets/images/ecommerce.jpg";
import atendimentoImg from "./../assets/images/atendimento-nacional.jpg";

function Services() {
  const services = [
    { 
      image: contabilidadeImg, 
      text: "Contabilidade 100% digital",
      alt: "Profissional trabalhando em dispositivos digitais"
    },
    { 
      image: viabilidadeImg, 
      text: "Estudo de viabilidade empresarial",
      alt: "Analista estudando gráficos e projeções"
    },
    { 
      image: planejamentoImg, 
      text: "Planejamento estratégico e gestão fiscal",
      alt: "Equipe em reunião de planejamento estratégico"
    },
    { 
      image: ecommerceImg, 
      text: "Especialização em serviços e e-commerce",
      alt: "Pessoa realizando vendas online"
    },
    { 
      image: atendimentoImg, 
      text: "Atendimento em todo o Brasil",
      alt: "Atendente virtual atendendo clientes nationwide"
    }
  ];

  return (
    <section id="services" className="services">
      <h2>Nossos Serviços</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.alt} />
            </div>
            <div className="service-content">
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;