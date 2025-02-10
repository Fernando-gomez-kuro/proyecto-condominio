import React, { useEffect, useState } from 'react';
import './notificaciones.css'; // Asegúrate de que el archivo CSS esté en el mismo directorio o ajusta la ruta

const Notificaciones = () => {
  const [totalMultas, setTotalMultas] = useState(0);

  useEffect(() => {
    // Llama al backend para obtener el total de las multas
    const fetchTotalMultas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/multas/total');
        const data = await response.json();
        setTotalMultas(data.total); // Guarda el total en el estado
      } catch (err) {
        console.error('Error al obtener el total de multas:', err);
      }
    };

    fetchTotalMultas();
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div className="notificaciones-container">
      <div className="notificacion-box">
        <h1 className="notificacion-title">Notificaciones</h1>
        <p className="notificacion-content">Aquí están las multas pendientes.</p>
        <p className="total-costo">Total a pagar por multas: ${totalMultas}</p>
        <button className="close-btn" onClick={() => alert('Cerrar ventana')}>Cerrar</button>
      </div>
    </div>
  );
};

export default Notificaciones;
