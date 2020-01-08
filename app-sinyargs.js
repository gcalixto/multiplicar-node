// requires hay tres tpo
//const fs = require('fs'); // propios de las librerias de node 
// const fs = require('express'); // paquete que no son nativos de node per que se pueden instalar
// const fs = require('./fs'); // archivos que nostros creamos en el proyecto propio
const { crearArchivo } = require('./multiplicar/multiplicar');

// let base = '4';

let argv = process.argv;
let parametro = argv[2];
// con el split separa de string a arreglo
let base = parametro.split('=')[1];

console.log(parametro);
console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(e => console.log(e));