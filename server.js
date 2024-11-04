const express = require('express');
require('./db/db-mongo-connect');
const ClienteRoutes = require('./src/routes/clienteRutas');
const EtapaRoutes = require('./src/routes/etapaRutas');
const ProyectoRoutes = require('./src/routes/proyectoRutas');
const TipoProyectoRoutes = require('./src/routes/TproyectoRutas');

const app = express();

app.use(express.json());

async function aplicacion() {
    await app.listen(5544);
    console.log("run in port: 5544");
}

app.get('/', (req, res) => {
    res.send("conected in line");
})

app.use('/cliente', ClienteRoutes);
app.use('/etapa', EtapaRoutes);
app.use('/proyecto', ProyectoRoutes);
app.use('/tipoProyecto', TipoProyectoRoutes);


aplicacion();