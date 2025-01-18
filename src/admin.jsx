import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'; // Asegúrate de que se importa el CSS correcto

function Admin() {
  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <ul>
        <li><Link to="/registro">Registrar usuarios </Link></li>
          <li><Link to="/usuarios">Gestión de usuarios</Link></li>
          <li><Link to="/">Cerrar sesión</Link></li>
        </ul>
      </nav>

      <div className="admin-content">
        <h1>Bienvenido al panel de administración</h1>
        <p>Aquí puedes gestionar los usuarios, revisar pagos y administrar multas.</p>
      </div>
    </div>
  );
}

export default Admin;
