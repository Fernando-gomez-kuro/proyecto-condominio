import React from 'react';
import { Link } from 'react-router-dom';
import './multasadm.css'; // Asegúrate de que la ruta del archivo CSS es correcta

function MultasAdmin() {
  return (
    <div className="muladm-container">
      {/* Barra de navegación */}
      <nav className="muladm-navbar">
        <ul>
          <li>
            <Link to="/admin">Inicio</Link>
          </li>
          <li>
            <Link to="/regismu">Registrar Multas</Link>
          </li>
          <li>
            <Link to="/usuarios">Gestión de Usuarios</Link>
          </li>
          <li>
            <Link to="/">Cerrar Sesión</Link>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="muladm-content">
        <h1>Bienvenido al Panel de Administración</h1>
        <p>
          Aquí puedes gestionar los usuarios, revisar pagos y administrar multas.
        </p>
      </div>
    </div>
  );
}

export default MultasAdmin;
