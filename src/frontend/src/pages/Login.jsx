import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../assets/css/Login.css"; // Import do CSS

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login de ${user} realizado com sucesso! (mock)`);
  };

  return (
    <div className="login-page">
      <h2>Acesse sua Conta</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Usuário ou E-mail" 
          value={user} 
          onChange={(e) => setUser(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} 
          required 
        />
        <button type="submit">Entrar no Sistema</button>
      </form>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}

export default Login;