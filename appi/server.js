const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Para permitir solicitudes desde el frontend
const bcrypt = require('bcrypt');
const Usuario = require('./models/usuario'); // Importar el modelo de usuario

dotenv.config();

const app = express();
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Middleware para manejar JSON

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Modelo de Mongoose para 'multas'
const multaSchema = new mongoose.Schema({
  torre: String,
  departamento: String,
  motivo: String,
  costo: Number,
});

const Multa = mongoose.model('Multa', multaSchema, 'multas');

// Ruta para obtener todas las multas
app.get('/api/multas', async (req, res) => {
  try {
    const multas = await Multa.find();
    res.json(multas); // Devuelve todas las multas en formato JSON
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para agregar una nueva multa
app.post('/api/multas', async (req, res) => {
  const { torre, departamento, motivo, costo } = req.body;

  const nuevaMulta = new Multa({
    torre,
    departamento,
    motivo,
    costo,
  });

  try {
    const savedMulta = await nuevaMulta.save();
    res.status(201).json(savedMulta); // Devuelve la multa recién creada
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para calcular el total de las multas
app.get('/api/multas/total', async (req, res) => {
  console.log('Ruta /api/multas/total solicitada'); // Añadir para verificar si la ruta es llamada

  try {
    const multas = await Multa.find(); // Obtén todas las multas de la base de datos
    const total = multas.reduce((sum, multa) => sum + multa.costo, 0); // Calcula el total
    res.json({ total }); // Devuelve el total como un objeto JSON
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para registrar un nuevo usuario
app.post('/register', async (req, res) => {
  const { nombre, telefono, departamento, password, rol } = req.body;

  // Validar si falta algún dato
  if (!nombre || !telefono || !departamento || !password) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  try {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const newUser = new Usuario({
      nombre,
      telefono,
      departamento,
      password: hashedPassword,
      rol,
    });

    // Guardar el usuario en la base de datos
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario', error });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
