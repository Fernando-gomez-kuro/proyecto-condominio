import React from 'react';
import { Link } from 'react-router-dom';
import './Multas.css'; // Asegúrate de que se importa el CSS correcto

function Multas() {
  return (
    <div className="multas-container">
      <nav className="multas-navbar">
        <ul>
          <li><Link to="/principal" className="active">inicio</Link></li>
          <li><Link to="/pagos">Registro de pagos</Link></li>
          <li><Link to="/">Cerrar sesión</Link></li>
        </ul>
      </nav>

      <div className="multas-content">
        <h1>Registro de Multas</h1>
        <p>Bienvenido al panel de registro de multas. Aquí puedes ver y gestionar las multas de los usuarios.</p>

        {/* Aquí puedes agregar una tabla o lista de las multas si las tienes */}
      </div>
    </div>
  );
}

export default Multas;
