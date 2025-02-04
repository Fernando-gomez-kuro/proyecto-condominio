import React, { useState } from "react";
import "./regismu.css";

const Regismu = () => {
  const [formData, setFormData] = useState({
    departamento: "",
    nombre: "",
    costo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí puedes agregar lógica para enviar los datos al servidor
  };

  return (
    <div className="regismu-container">
      <form className="regismu-form" onSubmit={handleSubmit}>
        <h1>Registrar Multa</h1>

        <div className="regismu-field">
          <label htmlFor="departamento">Departamento:</label>
          <input
            type="text"
            id="departamento"
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
            placeholder="Ingresa el departamento"
            required
          />
        </div>

        <div className="regismu-field">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresa el nombre"
            required
          />
        </div>

        <div className="regismu-field">
          <label htmlFor="costo">Costo de la multa:</label>
          <input
            type="number"
            id="costo"
            name="costo"
            value={formData.costo}
            onChange={handleChange}
            placeholder="Ingresa el costo de la multa"
            required
          />
        </div>

        <button type="submit" className="regismu-btn">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Regismu;
