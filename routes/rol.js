const express = require('express');
const router = express.Router();

const rolesControllers = require('../controllers/rolesControllers');
const auth = require('../middleware/auth');


// Rutas para los roles
router.post('/rol', auth, rolesControllers.crearRol); // Crear un nuevo rol
router.get('/roles', auth, rolesControllers.obtenerRoles); // Obtener todos los roles
router.get('/roles/:id', auth, rolesControllers.obtenerRolPorId); // Obtener un rol por ID
router.put('/roles/:id', auth, rolesControllers.actualizarRol); // Actualizar un rol
router.delete('/roles/:id', auth, rolesControllers.eliminarRol); // Eliminar un rol

module.exports = router;
// Exportar el router para usarlo en el archivo principal de la aplicación
