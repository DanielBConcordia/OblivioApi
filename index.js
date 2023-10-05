const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;

const cuidador = require('./controllers/cuidadorController.js');
const paciente = require('./controllers/pacienteController.js');
const remedio = require('./controllers/remedioController.js');
const nivel = require('./controllers/nivelController.js');
const alergia = require('./controllers/alergiaController.js');
//const pulseiraScan = require('./controllers/pulseiraScanController.js');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('API Oblivio'))
app.use('/cuidador',cuidador);
app.use(paciente);
app.use(remedio);
app.use(alergia);
//app.use(pulseiraScan);
app.use(nivel);

app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))