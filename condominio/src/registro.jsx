import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    departamento: '',
    password: '',
    rol: 'usuario',
  });

  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false); // Indicador de carga

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Iniciar carga

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false); // Detener carga

      if (response.ok) {
        setMensaje('Usuario registrado con éxito.');
        setFormData({
          nombre: '',
          telefono: '',
          departamento: '',
          password: '',
          rol: 'usuario',
        });
      } else {
        setMensaje(data.message || 'Error al registrar el usuario.');
      }
    } catch (error) {
      setLoading(false);
      setMensaje('Ocurrió un error al conectar con el servidor.');
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-box">
        <h2>Registro de Usuario</h2>
        {mensaje && <p className="mensaje">{mensaje}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Número Telefónico"
            value={formData.telefono}
            onChange={handleChange}
            required
            pattern="^\d{10}$" // Asegura que el teléfono tenga 10 dígitos
          />
          <input
            type="text"
            name="departamento"
            placeholder="Departamento"
            value={formData.departamento}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select
            name="rol"
            value={formData.rol}
            onChange={handleChange}
          >
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
          </select>

          <button type="submit" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrar'}
          </button>
        </form>
        <Link to="/admin">
          <button className="salir-btn">Salir</button>
        </Link>
      </div>
    </div>
  );
}

export default Registro;
