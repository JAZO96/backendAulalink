const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        const dbUri = process.env.DB_MONGO
        if (!dbUri) {
            throw new Error("No se ha definido la variable de entorno DB_MONGO");
        }
        await mongoose.connect(dbUri, {});
        console.log("Conexión a la base de datos MongoDB exitosa");
    } catch (error) {
        console.log("Error al conectar a la base de datos MongoDB:", error.message);
        process.exit(1); // Termina el proceso si hay un error de conexión
    }
}

module.exports = conectarDB;
// Nota: Asegúrate de que la variable de entorno DB_MONGO esté definida en tu archivo .env
// y que contenga la URI de conexión a tu base de datos MongoDB.