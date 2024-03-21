const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://jesuhernan232:JesusM160504@cluster1.ysho4ut.mongodb.net/Sensores', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión a MongoDB exitosa');
}).catch((error) => {
    console.error('Error en la conexión a MongoDB:', error);
});

const miSchema = new mongoose.Schema({
    timestamp: { type: Date, required: true },
    temperatura: { type: Number, required: true },
    humedad: { type: Number, required: true }
});

const MiModelo = mongoose.model('documento', miSchema);

app.get('/documento', async (req, res) => {
    try {
        const datos = await MiModelo.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
