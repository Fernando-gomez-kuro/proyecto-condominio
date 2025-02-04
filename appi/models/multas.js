const mongoose = require('mongoose');

const multaSchema = new mongoose.Schema({
    torre:String,
    departamento:String,
    motivo:String,
    costo:Number,
});

const Multa = mongoose.model('multa', multaSchema, 'multas');

module.exports = Multa; 