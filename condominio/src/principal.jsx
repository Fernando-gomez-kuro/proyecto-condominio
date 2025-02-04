import React from 'react';
import { Link } from 'react-router-dom';
import './Principal.css'; // Asegúrate de que se importa el CSS correcto

function Principal() {
  return (
    <div className="principal-container">
      <nav className="principal-navbar">
        <ul>
          <li><Link to="/pagos">Registro de pagos</Link></li>
          <li><Link to="/multas">Registro de multas</Link></li>
          <li><Link to="/">Cerrar sesión</Link></li>
        </ul>
      </nav>

      <div className="principal-content">
        <h1>Bienvenido al panel principal</h1>
        <p>Este es el área principal. Aquí puedes agregar más funcionalidades.</p>
      </div>
    </div>
  );
}

export default Principal;
