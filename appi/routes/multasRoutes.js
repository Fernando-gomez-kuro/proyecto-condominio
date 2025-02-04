const express = require('express');
const Multa = require('../models/Multa'); // Modelo de Mongoose
const router = express.Router();

// Ruta para obtener todas las multas
router.get('/', async (req, res) => {
  try {
    const multas = await Multa.find();
    res.json(multas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para agregar una nueva multa
router.post('/', async (req, res) => {
  const { torre, departamento, motivo ,costo,} = req.body;
  const nuevaMulta = new Multa({
    torre,
    departamento,
    motivo,
    costo,
  });

  try {
    const savedMulta = await nuevaMulta.save();
    res.status(201).json(savedMulta); // Retorna la multa agregada
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;