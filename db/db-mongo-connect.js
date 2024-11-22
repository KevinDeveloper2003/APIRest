const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://admin:admin@myapp.oaael.mongodb.net/?retryWrites=true&w=majority&appName=myapp";

// Configuramos la conexión a mongoDB
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Eventos de conexión
mongoose.connection.on('connected', () => {
    console.log('Conexión a MongoDB establecida.');
  });

mongoose.connection.on('error', (err) => {
    console.error('Error de conexión a MongoDB:', err);
  });
  
mongoose.connection.on('disconnected', () => {
    console.log('Desconectado de MongoDB.');
  });
  
// Exportamos la conexión para usarla en otros archivos
module.exports = mongoose.connection;

