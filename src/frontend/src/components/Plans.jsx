import React from "react";
import "./../assets/css/Plans.css";

function Plans() {
  return (
    <section id="plans" className="plans">
      <h2>Planos e Preços</h2>
      <div className="plan-list">
        
        <div className="plan">
          <h3>Básico</h3>
          <p><strong>R$ 299/mês</strong></p>
          <p>✔ Ideal para microempresas.</p>
          <p>✔ Obrigações fiscais básicas.</p>
          <button>Assinar</button>
        </div>
        
        <div className="plan">
          <h3>Profissional</h3>
          <p><strong>R$ 499/mês</strong></p>
          <p>✔ Para empresas em crescimento.</p>
          <p>✔ Consultoria tributária inclusa.</p>
          <button>Assinar</button>
        </div>
        
        <div className="plan">
          <h3>Premium</h3>
          <p><strong>R$ 899/mês</strong></p>
          <p>✔ Gestão contábil estratégica.</p>
          <p>✔ Suporte consultivo ilimitado.</p>
          <button>Assinar</button>
        </div>

      </div>
    </section>
  );
}

export default Plans;
