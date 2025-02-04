import React from 'react';
import { Link } from 'react-router-dom';
import './Pagos.css'; // Asegúrate de que se importa el CSS correcto

function Pagos() {
  return (
    <div className="pagos-container">
      <nav className="pagos-navbar">
        <ul>
          <li><Link to="/principal" className="pagos-active">inicio</Link></li>
          <li><Link to="/multas">Registro de multas</Link></li>
          <li><Link to="/">Cerrar sesión</Link></li>
        </ul>
      </nav>

      <div className="pagos-content">
        <h1>Bienvenido al panel de pagos</h1>
        <p>Este es el área donde podrás registrar y gestionar los pagos.</p>
      </div>
    </div>
  );
}

export default Pagos;
