const mongoose = require('mongoose');
const URI = 'mongodb://localhost/nuevo_trabajo';

mongoose.connect(URI)
    .then(db => console.log('BASE DE DATOS CONECTADA'))
    .catch(err => console.error(err));

module.exports = mongoose;