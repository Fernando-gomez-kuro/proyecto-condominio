import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './multasadm.css';

function MultasAdmin() {
  const [multa, setMulta] = useState({
    torre: '',
    departamento: '',
    motivo: '',
    costo: ''
  });

  const handleChange = (e) => {
    setMulta({ ...multa, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/multas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(multa)
      });

      if (response.ok) {
        alert('Multa registrada con éxito');
        setMulta({ torre: '', departamento: '', motivo: '', costo: '' });
      } else {
        alert('Error al registrar la multa');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="muladm-container">
      <nav className="muladm-navbar">
        <ul>
          <li><Link to="/admin">Inicio</Link></li>
          <li><Link to="/regismu">Registrar Multas</Link></li>
          <li><Link to="/usuarios">Gestión de Usuarios</Link></li>
          <li><Link to="/">Cerrar Sesión</Link></li>
        </ul>
      </nav>

      <div className="muladm-content">
        <h1>Registrar Multa</h1>
        <form onSubmit={handleSubmit} className="muladm-form">
          <label>
            Torre:
            <input type="text" name="torre" value={multa.torre} onChange={handleChange} required />
          </label>

          <label>
            Departamento:
            <input type="text" name="departamento" value={multa.departamento} onChange={handleChange} required />
          </label>

          <label>
            Motivo:
            <input type="text" name="motivo" value={multa.motivo} onChange={handleChange} required />
          </label>

          <label>
            Costo:
            <input type="number" name="costo" value={multa.costo} onChange={handleChange} required />
          </label>

          <button type="submit">Registrar Multa</button>
        </form>
      </div>
    </div>
  );
}

export default MultasAdmin;
