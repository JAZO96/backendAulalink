require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/db');
const router = require('./routes/rol');
const authRouter = require('./routes/auth');

const app = express();

conectarDB(); // Conectar a la base de datos MongoDB

const port = 3000;

// Middleware para leer datos datos en formato JSON
app.use(express.json());

app.use('/api', router); // Usar las rutas definidas en el archivo de rutas
app.use('/api/auth', authRouter)


app.get('/', (req, res) => {
    res.send("Hola mundo desde Express!");
})




app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});