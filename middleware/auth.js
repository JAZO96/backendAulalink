const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');

    if (!token) return res.status(401).json({ message: 'No hay token, permiso denegado' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.usuario = decoded.usuario;
        next()
    } catch (error) {
        res.status(401).json({ message: 'Token no válido' });

    }
}