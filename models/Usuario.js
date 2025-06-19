const mongoose = require('mongoose');

const usuarioSchema = new mongoose.mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    contrasena: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        enum: ['Estudiante', 'Docente', 'Administrativo', 'Padre o Acudiente'],
        required: true,
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);