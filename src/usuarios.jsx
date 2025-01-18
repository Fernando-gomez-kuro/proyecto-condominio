import React from 'react';
import { Link } from 'react-router-dom';
import './Usuarios.css'; // Importa el CSS

function Usuario() {
  return (
    <div className="usuario-container">
      <nav className="usuario-navbar">
        <ul>
            <li><Link to="/admin" className="pagos-active">inicio</Link></li>
          <li><Link to="/registro">Registrar Usuario</Link></li>
          <li><Link to="/">Cerrar sesión</Link></li>
        </ul>
      </nav>

      <div className="usuario-content">
        <h1>Gestión de Usuarios</h1>
        <p>Desde aquí puedes administrar los usuarios del sistema.</p>
      </div>
    </div>
  );
}

export default Usuario;
