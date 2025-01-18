import React from 'react';
import { Link } from 'react-router-dom';
import './Registro.css'; // Importa el CSS

function Registro() {
  return (
    <div className="registro-container">
      <div className="registro-box">
        <h2>Registro de Usuario</h2>
        
        <input type="text" placeholder="Nombre" />
        <input type="tel" placeholder="Número Telefónico" />
        <input type="text" placeholder="Departamento" />

        <button>Registrar</button>
        <Link to="/admin">
          <button className="salir-btn">Salir</button>
        </Link>
      </div>
    </div>
  );
}

export default Registro;
