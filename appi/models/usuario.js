const mongoose = require('mongoose');

// Esquema para el usuario
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true },
  departamento: { type: String, required: true },
  password: { type: String, required: true },
  rol: { type: String, default: 'usuario' }, // 'usuario' o 'admin'
});

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios');

module.exports = Usuario;
