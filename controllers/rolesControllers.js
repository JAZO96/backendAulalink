const Roles = require('../models/Roles');

// Create a new role
exports.crearRol = async (req, res) => {
    try {
        let data_rol = new Roles(req.body);
        await data_rol.save();
        res.send({ data_rol });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al crear el rol' });
    }
}

// Find all roles
exports.obtenerRoles = async (req, res) => {
    try {
        const data_roles = await Roles.find();
        res.json(data_roles);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al obtener los roles' });
    }
}

exports.obtenerRolPorId = async (req, res) => {
    try {
        const data_rol = await Roles.findById(req.params.id)
        if (!data_rol) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        res.json(data_rol);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al obtener el rol por ID' });
    }
}

// Update a role
exports.actualizarRol = async (req, res) => {
    try {
        const { nombre, edad, rol } = req.body;
        let data_roles = await Roles.findById(req.params.id)
        if (!data_roles) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        data_nota = await Roles.findByIdAndUpdate(
            { _id: req.params.id },
            { nombre, edad, rol }, //Actualiza los valores del cuerpo de la solicitud
            { new: true } // Devuelve el documento actualizado
        );

        res.json(data_roles);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al actualizar el rol' });
    }
}

// Delete a role
exports.eliminarRol = async (req, res) => {
    try {
        const data_roles = await Roles.findById(req.params.id);
        if (!data_roles) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }
        await Roles.findByIdAndDelete(req.params.id);
        res.json({ message: 'Rol eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al eliminar el rol' });
    }
}