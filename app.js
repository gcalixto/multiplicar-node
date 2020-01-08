// requires hay tres tpo
//const fs = require('fs'); // propios de las librerias de node 
// const fs = require('express'); // paquete que no son nativos de node per que se pueden instalar
// const fs = require('./fs'); // archivos que nostros creamos en el proyecto propio


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
// const colors = require('colors');
var colors = require('colors/safe');



// const { listarTabla } = require('./multiplicar/multiplicar');

// let base = '4';

// let argv2 = process.argv;
// let parametro = argv[2];
// con el split separa de string a arreglo
// let base = parametro.split('=')[1];

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(console.log('Listado sin errores'))
            .catch(e => console.log(e));
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;


    default:
        console.log('Comando no Reconocido');
        break;
}

// console.log(argv.base);