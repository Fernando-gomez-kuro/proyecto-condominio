import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(telefono)) {
      alert('Por favor, ingrese un número de teléfono válido de 10 dígitos.');
      return;
    }

    if (telefono.endsWith('9')) {
      navigate('/admin'); // Redirige al admin
    } else if (telefono.endsWith('0')) {
      navigate('/principal'); // Redirige al usuario
    } else {
      alert('Número de teléfono o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img 
          src="https://img.freepik.com/vector-gratis/logotipo-inmobiliario-dibujado-mano_23-2151335497.jpg?t=st=1737059987~exp=1737063587~hmac=2413c55206e1f067d07a41720ef86c8b533ad451db0e97a8223e36e16d2d8c40&w=740" // Reemplaza esta URL con la URL de tu logo
          alt="Logo"
          className="logo" 
        />
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Número de teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            maxLength="10"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
