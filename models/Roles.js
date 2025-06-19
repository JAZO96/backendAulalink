const mongoose = require('mongoose');

const rolesSchema = mongoose.Schema({
    fecha_ingreso: {
        type: Date,
        default: Date.now,
    },
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    rol: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Roles', rolesSchema);