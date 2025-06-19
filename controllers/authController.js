const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

exports.registrarUsuario = async (req, res) => {
    const { nombre, correo, contrasena, rol } = req.body;
    try {
        let usuario = await Usuario.findOne({ correo });
        if (usuario) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        usuario = new Usuario({ nombre, correo, contrasena, rol });
        const salt = await bcrypt.genSalt(10);
        usuario.contrasena = await bcrypt.hash(contrasena, salt);

        await usuario.save();

        const payload = { usuario: { id: usuario.id } };
        const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor' });
    }
}

exports.autenticarUsuario = async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({ message: 'El usuario no existe' });
        }

        const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }
        const payload = { usuario: { id: usuario.id } };
        const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor' });
    }
}